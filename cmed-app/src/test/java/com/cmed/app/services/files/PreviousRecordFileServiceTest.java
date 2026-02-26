package com.cmed.app.services.files;

import com.cmed.app.dtos.files.CreatePreviousRecordFileDto;
import com.cmed.app.dtos.files.PreviousRecordFileDto;
import com.cmed.app.exceptions.PreviousRecordNotFoundException;
import com.cmed.app.exceptions.PreviousRecordFileNotFoundException;
import com.cmed.app.exceptions.FileStorageException;
import com.cmed.app.mappers.files.PreviousRecordFileMapper;
import com.cmed.app.models.files.PreviousRecordFile;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.repositories.files.PreviousRecordFileRepository;
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
class PreviousRecordFileServiceTest {

    @Mock
    private PreviousRecordFileRepository previousRecordFileRepository;

    @Mock
    private PreviousRecordRepository previousRecordRepository;

    @Mock
    private PreviousRecordFileMapper previousRecordFileMapper;

    @Mock
    private FileStorageUtils fileStorageUtils;

    @InjectMocks
    private PreviousRecordFileService previousRecordFileService;

    private PreviousRecord previousRecord;
    private PreviousRecordFile previousRecordFile;
    private CreatePreviousRecordFileDto createDto;
    private PreviousRecordFileDto fileDto;
    private UUID fileId;
    private LocalDateTime now;
    private MockMultipartFile mockFile;

    @BeforeEach
    void init() {
        fileId = UUID.randomUUID();
        now = LocalDateTime.now();

        previousRecord = new PreviousRecord();
        previousRecord.setId(UUID.randomUUID());
        previousRecord.setCreatedAt(now);
        previousRecord.setUpdatedAt(now);

        previousRecordFile = new PreviousRecordFile();
        previousRecordFile.setId(fileId);
        previousRecordFile.setCreatedAt(now);
        previousRecordFile.setUpdatedAt(now);
        previousRecordFile.setPreviousRecord(previousRecord);
        previousRecordFile.setFileName("previous.pdf");
        previousRecordFile.setOriginalName("previous.pdf");
        previousRecordFile.setFileSize(1024L);
        previousRecordFile.setFileExtension("pdf");

        mockFile = new MockMultipartFile(
            "file",
            "previous.pdf",
            "application/pdf",
            "test content".getBytes()
        );

        createDto = CreatePreviousRecordFileDto.builder()
            .file(mockFile)
            .previousRecordId(previousRecord.getId().toString())
            .build();

        fileDto = new PreviousRecordFileDto(
            fileId,
            now,
            now,
            previousRecord.getId(),
            previousRecordFile.getFileName(),
            previousRecordFile.getOriginalName(),
            previousRecordFile.getFileExtension(),
            previousRecordFile.getFileSize(),
            null
        );
    }

    @Test
    void getAllByPreviousRecordIdShouldReturnFiles() {
        when(previousRecordFileRepository.findByPreviousRecordId(any(UUID.class)))
                .thenReturn(List.of(previousRecordFile));
        when(previousRecordFileMapper.toDto(any(PreviousRecordFile.class)))
                .thenReturn(fileDto);

        List<PreviousRecordFileDto> result = previousRecordFileService.getAllByPreviousRecordId(previousRecord.getId());

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(fileDto.id(), result.get(0).id());
        verify(previousRecordFileRepository).findByPreviousRecordId(previousRecord.getId());
    }

    @Test
    void createShouldSaveFile() {
        when(previousRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(previousRecord));
        when(previousRecordFileMapper.toEntity(any(CreatePreviousRecordFileDto.class)))
                .thenReturn(previousRecordFile);
        when(previousRecordFileRepository.save(any(PreviousRecordFile.class)))
                .thenReturn(previousRecordFile);
        when(previousRecordFileMapper.toDto(any(PreviousRecordFile.class)))
                .thenReturn(fileDto);
        doNothing().when(fileStorageUtils).storeFile(any(), any());

        PreviousRecordFileDto result = previousRecordFileService.create(createDto);

        assertNotNull(result);
        assertEquals(fileDto.id(), result.id());
        // Verificar que storeFile se llama antes de save
        verify(fileStorageUtils).storeFile(any(), any());
        verify(previousRecordFileRepository).save(any(PreviousRecordFile.class));
    }

    @Test
    void createShouldRollbackWhenFileStorageFails() {
        when(previousRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(previousRecord));
        when(previousRecordFileMapper.toEntity(any(CreatePreviousRecordFileDto.class)))
                .thenReturn(previousRecordFile);
        doThrow(new RuntimeException("Storage failed"))
                .when(fileStorageUtils).storeFile(any(), any());

        assertThrows(FileStorageException.class, () ->
            previousRecordFileService.create(createDto));

        // Si storeFile falla, save nunca se ejecuta
        verify(previousRecordFileRepository, never()).save(any(PreviousRecordFile.class));
    }

    @Test
    void createShouldThrowWhenPreviousRecordNotFound() {
        when(previousRecordRepository.findById(any(UUID.class)))
                .thenReturn(Optional.empty());

        assertThrows(PreviousRecordNotFoundException.class, () ->
            previousRecordFileService.create(createDto));

        verify(previousRecordFileRepository, never()).save(any());
        verify(fileStorageUtils, never()).storeFile(any(), any());
    }

    @Test
    void deleteShouldRemoveFile() {
        when(previousRecordFileRepository.findById(any(UUID.class)))
                .thenReturn(Optional.of(previousRecordFile));
        doNothing().when(previousRecordFileRepository).delete(any(PreviousRecordFile.class));
        doNothing().when(fileStorageUtils).deleteFile(any());

        assertDoesNotThrow(() -> previousRecordFileService.delete(previousRecordFile.getId()));

        verify(previousRecordFileRepository).delete(previousRecordFile);
        verify(fileStorageUtils).deleteFile(any());
    }

    @Test
    void deleteShouldThrowWhenFileNotFound() {
        when(previousRecordFileRepository.findById(any(UUID.class)))
                .thenReturn(Optional.empty());

        assertThrows(PreviousRecordFileNotFoundException.class, () ->
            previousRecordFileService.delete(UUID.randomUUID()));

        verify(previousRecordFileRepository, never()).delete(any());
        verify(fileStorageUtils, never()).deleteFile(any());
    }
}
