package com.cmed.app.services.files;

import com.cmed.app.dtos.files.CreateMedicalRecordFileDto;
import com.cmed.app.dtos.files.MedicalRecordFileDto;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.exceptions.MedicalRecordFileNotFoundException;
import com.cmed.app.exceptions.FileStorageException;
import com.cmed.app.mappers.files.MedicalRecordFileMapper;
import com.cmed.app.models.files.MedicalRecordFile;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.files.MedicalRecordFileRepository;
import com.cmed.app.utils.FileStorageUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;

import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MedicalRecordFileServiceTest {

    @Mock
    private MedicalRecordFileRepository medicalRecordFileRepository;

    @Mock
    private MedicalRecordRepository medicalRecordRepository;

    @Mock
    private MedicalRecordFileMapper medicalRecordFileMapper;

    @Mock
    private FileStorageUtils fileStorageUtils;

    @InjectMocks
    private MedicalRecordFileService medicalRecordFileService;

    private MedicalRecord medicalRecord;
    private MedicalRecordFile medicalRecordFile;
    private CreateMedicalRecordFileDto createDto;
    private MedicalRecordFileDto fileDto;
    private UUID fileId;
    private LocalDateTime now;
    private MockMultipartFile mockFile;

    @BeforeEach
    void init() {
        fileId = UUID.randomUUID();
        now = LocalDateTime.now();

        medicalRecord = new MedicalRecord();
        medicalRecord.setId(UUID.randomUUID());
        medicalRecord.setCreatedAt(now);
        medicalRecord.setUpdatedAt(now);

        medicalRecordFile = new MedicalRecordFile();
        medicalRecordFile.setId(fileId);
        medicalRecordFile.setCreatedAt(now);
        medicalRecordFile.setUpdatedAt(now);
        medicalRecordFile.setMedicalRecord(medicalRecord);
        medicalRecordFile.setFileName("test.pdf");
        medicalRecordFile.setOriginalName("test.pdf");
        medicalRecordFile.setFileSize(1024L);
        medicalRecordFile.setFileExtension("pdf");

        mockFile = new MockMultipartFile(
            "file",
            "test.pdf",
            "application/pdf",
            "test content".getBytes()
        );

        createDto = CreateMedicalRecordFileDto.builder()
            .file(mockFile)
            .medicalRecordId(medicalRecord.getId().toString())
            .build();

        fileDto = new MedicalRecordFileDto(
            fileId,
            now,
            now,
            medicalRecordFile.getFileName(),
            medicalRecordFile.getOriginalName(),
            medicalRecordFile.getFileExtension(),
            medicalRecordFile.getFileSize(),
            null,
            medicalRecord.getId()
        );
    }

    @Test
    void getAllByMedicalRecordIdShouldReturnFiles() {
        when(medicalRecordFileRepository.findByMedicalRecordId(any(UUID.class)))
                .thenReturn(List.of(medicalRecordFile));
        when(medicalRecordFileMapper.toDto(any(MedicalRecordFile.class)))
                .thenReturn(fileDto);

        List<MedicalRecordFileDto> result = medicalRecordFileService.getAllByMedicalRecordId(medicalRecord.getId());

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(fileDto.id(), result.get(0).id());
        verify(medicalRecordFileRepository).findByMedicalRecordId(medicalRecord.getId());
    }

    @Test
    void createShouldSaveFile() {
        when(medicalRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(medicalRecord));
        when(medicalRecordFileMapper.toEntity(any(CreateMedicalRecordFileDto.class)))
                .thenReturn(medicalRecordFile);
        when(medicalRecordFileRepository.save(any(MedicalRecordFile.class)))
                .thenReturn(medicalRecordFile);
        when(medicalRecordFileMapper.toDto(any(MedicalRecordFile.class)))
                .thenReturn(fileDto);
        doNothing().when(fileStorageUtils).storeFile(any(), any());

        MedicalRecordFileDto result = medicalRecordFileService.create(createDto);

        assertNotNull(result);
        assertEquals(fileDto.id(), result.id());
        // Verificar que storeFile se llama antes de save
        verify(fileStorageUtils).storeFile(any(), any());
        verify(medicalRecordFileRepository).save(any(MedicalRecordFile.class));
    }

    @Test
    void createShouldRollbackWhenFileStorageFails() {
        when(medicalRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(medicalRecord));
        when(medicalRecordFileMapper.toEntity(any(CreateMedicalRecordFileDto.class)))
                .thenReturn(medicalRecordFile);
        doThrow(new RuntimeException("Storage failed"))
                .when(fileStorageUtils).storeFile(any(), any());

        assertThrows(FileStorageException.class, () ->
            medicalRecordFileService.create(createDto));

        // Si storeFile falla, save nunca se ejecuta
        verify(medicalRecordFileRepository, never()).save(any(MedicalRecordFile.class));
    }

    @Test
    void createShouldThrowWhenMedicalRecordNotFound() {
        when(medicalRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.empty());

        assertThrows(MedicalRecordNotFoundException.class, () ->
            medicalRecordFileService.create(createDto));

        verify(medicalRecordFileRepository, never()).save(any());
        verify(fileStorageUtils, never()).storeFile(any(), any());
    }

    @Test
    void deleteShouldRemoveFile() {
        when(medicalRecordFileRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(medicalRecordFile));
        doNothing().when(medicalRecordFileRepository).delete(any(MedicalRecordFile.class));
        doNothing().when(fileStorageUtils).deleteFile(any());

        assertDoesNotThrow(() -> medicalRecordFileService.delete(medicalRecordFile.getId()));

        verify(medicalRecordFileRepository).delete(medicalRecordFile);
        verify(fileStorageUtils).deleteFile(any());
    }

    @Test
    void deleteShouldThrowWhenFileNotFound() {
        when(medicalRecordFileRepository.findById(any(UUID.class)))
                .thenReturn(Optional.empty());

        assertThrows(MedicalRecordFileNotFoundException.class, () ->
            medicalRecordFileService.delete(UUID.randomUUID()));

        verify(medicalRecordFileRepository, never()).delete(any());
        verify(fileStorageUtils, never()).deleteFile(any());
    }
}
