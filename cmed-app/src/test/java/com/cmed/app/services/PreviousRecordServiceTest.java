package com.cmed.app.services;

import com.cmed.app.dtos.previousRecords.PreviousRecordCreateDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordListDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.cmed.app.mappers.previousRecords.PreviousRecordCreateDtoMapper;
import com.cmed.app.mappers.previousRecords.PreviousRecordDtoMapper;
import com.cmed.app.mappers.previousRecords.PreviousRecordListDtoMapper;
import com.cmed.app.mappers.previousRecords.PreviousRecordUpdateDtoMapper;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.repositories.PatientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

// TODO: Esto hay que cambiarlo porque los tests no prueban lógica real
@ExtendWith(MockitoExtension.class)
class PreviousRecordServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @Mock
    private PreviousRecordRepository previousRecordRepository;

    @Mock
    private PreviousRecordDtoMapper previousRecordDtoMapper;

    @Mock
    private PreviousRecordListDtoMapper previousRecordListDtoMapper;

    @Mock
    private PreviousRecordCreateDtoMapper previousRecordCreateDtoMapper;

    @Mock
    private PreviousRecordUpdateDtoMapper previousRecordUpdateDtoMapper;

    @InjectMocks
    private PreviousRecordService previousRecordService;

    private Patient patient;
    private PreviousRecord previousRecord;

    private static final String MEDICAL_RECORD_NOT_FOUND = "PreviousRecord not found: ";

    @BeforeEach
    void init() {
        patient = Patient.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .email("johndoe@example.com")
                .name("John")
                .lastName("Doe")
                .phone("1234567890")
                .dni("12345678A")
                .birthDate(LocalDate.of(1990, 1, 1))
                .build();

        previousRecord = PreviousRecord.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .patient(patient)
                .description("General Checkup")
                .files(new ArrayList<>())
                .build();
    }

    @Test
    void getAll_whenExists_returnsListOfPreviousRecords() {
        PreviousRecordListDto previousRecordListDto = new PreviousRecordListDto(
                previousRecord.getId(),
                LocalDateTime.now(),
                previousRecord.getPatient().getId(),
                previousRecord.getDescription()
        );

        when(previousRecordRepository.findAll()).thenReturn(List.of(previousRecord));
        when(previousRecordListDtoMapper.toDto(any(PreviousRecord.class))).thenReturn(previousRecordListDto);

        List<PreviousRecordListDto> result = previousRecordService.getAll();

        assertEquals(1, result.size());
        verify(previousRecordRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(previousRecordRepository.findAll()).thenReturn(List.of());

        List<PreviousRecordListDto> result = previousRecordService.getAll();

        assertTrue(result.isEmpty());
        verify(previousRecordRepository, times(1)).findAll();
    }

    @Test
    void getAllByPatientId_whenExists_returnsListOfPreviousRecords() {
        PreviousRecordListDto previousRecordListDto = new PreviousRecordListDto(
                previousRecord.getId(),
                LocalDateTime.now(),
                previousRecord.getPatient().getId(),
                previousRecord.getDescription()
        );

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(previousRecordRepository.findAllByPatientId(patient.getId())).thenReturn(List.of(previousRecord));
        when(previousRecordListDtoMapper.toDto(any(PreviousRecord.class))).thenReturn(previousRecordListDto);

        List<PreviousRecordListDto> result = previousRecordService.getAllByPatientId(patient.getId());

        assertEquals(1, result.size());
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(previousRecordRepository, times(1)).findAllByPatientId(patient.getId());
    }

    @Test
    void getAllByPatientId_whenNotExists_returnsEmpty() {
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(previousRecordRepository.findAllByPatientId(patient.getId())).thenReturn(List.of());

        List<PreviousRecordListDto> result = previousRecordService.getAllByPatientId(patient.getId());

        assertTrue(result.isEmpty());
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(previousRecordRepository, times(1)).findAllByPatientId(patient.getId());
    }

    @Test
    void getById_whenExists_returnsPreviousRecord() {
        PreviousRecordDto previousRecordDto = new PreviousRecordDto(
                previousRecord.getId(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                previousRecord.getPatient().getId(),
                previousRecord.getDescription()
        );

        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.of(previousRecord));
        when(previousRecordDtoMapper.toDto(any(PreviousRecord.class))).thenReturn(previousRecordDto);

        PreviousRecordDto result = previousRecordService.getById(previousRecord.getId());

        assertEquals(previousRecord.getPatient().getId(), result.patientId());
        assertEquals(previousRecord.getDescription(), result.description());
        verify(previousRecordRepository, times(1)).findById(previousRecord.getId());
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> previousRecordService.getById(previousRecord.getId()));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + previousRecord.getId(), ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedPreviousRecord() {
        PreviousRecordCreateDto previousRecordToCreateDto = PreviousRecordCreateDto.builder()
                .patientId(patient.getId().toString())
                .description(previousRecord.getDescription())
                .build();

        PreviousRecordDto previousRecordDto = new PreviousRecordDto(
                previousRecord.getId(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                previousRecord.getPatient().getId(),
                previousRecord.getDescription()
        );

        when(previousRecordRepository.save(any(PreviousRecord.class))).thenReturn(previousRecord);
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(previousRecordDtoMapper.toDto(any(PreviousRecord.class))).thenReturn(previousRecordDto);

        PreviousRecordDto result = previousRecordService.create(previousRecordToCreateDto);

        assertNotNull(result);
        assertEquals(previousRecord.getPatient().getId(), result.patientId());
        assertEquals(previousRecord.getDescription(), result.description());
        verify(previousRecordRepository).save(any(PreviousRecord.class));
    }

    @Test
    void create_whenWrong_throwsException() {
        PreviousRecordCreateDto dto = PreviousRecordCreateDto.builder()
                .patientId(patient.getId().toString())
                .description(previousRecord.getDescription())
                .build();

        when(previousRecordCreateDtoMapper.toDto(previousRecord)).thenReturn(dto);

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> previousRecordService.create(previousRecordCreateDtoMapper.toDto(previousRecord)));

        assertEquals("Patient not found", ex.getMessage());
    }

    @Test
    void update_whenExists_updatesAndReturnsPreviousRecord() {
        // Arrange
        PreviousRecord updatedPreviousRecord = PreviousRecord.builder()
                .id(previousRecord.getId())
                .createdAt(previousRecord.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .deletedAt(previousRecord.getDeletedAt())
                .patient(previousRecord.getPatient())
                .description("General Checkup UPDATED")
                .files(previousRecord.getFiles())
                .build();

        PreviousRecordDto updatedDto = new PreviousRecordDto(
                updatedPreviousRecord.getId(),
                updatedPreviousRecord.getCreatedAt(),
                updatedPreviousRecord.getUpdatedAt(),
                updatedPreviousRecord.getPatient().getId(),
                updatedPreviousRecord.getDescription()
        );

        PreviousRecordUpdateDto updateDto = PreviousRecordUpdateDto.builder()
                .description(updatedPreviousRecord.getDescription())
                .build();

        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.of(previousRecord));
        when(previousRecordRepository.save(previousRecord)).thenReturn(updatedPreviousRecord);
        when(previousRecordDtoMapper.toDto(updatedPreviousRecord)).thenReturn(updatedDto);

        // Act
        PreviousRecordDto result = previousRecordService.update(previousRecord.getId(), updateDto);

        // Assert
        assertNotNull(result);
        assertEquals("General Checkup UPDATED", result.description());
        verify(previousRecordRepository, times(1)).findById(previousRecord.getId());
        verify(previousRecordRepository, times(1)).save(previousRecord);
        verify(previousRecordDtoMapper, times(1)).toDto(updatedPreviousRecord);
    }

    @Test
    void update_whenNotExists_throwsException() {
        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> previousRecordService.update(previousRecord.getId(), previousRecordUpdateDtoMapper.toDto(previousRecord)));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + previousRecord.getId(), ex.getMessage());
    }

    @Test
    void delete_whenExists_deletesPreviousRecord() {
        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.of(previousRecord));
        doNothing().when(previousRecordRepository).delete(previousRecord);

        previousRecordService.delete(previousRecord.getId());

        verify(previousRecordRepository).delete(previousRecord);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> previousRecordService.delete(previousRecord.getId()));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + previousRecord.getId(), ex.getMessage());
    }
}