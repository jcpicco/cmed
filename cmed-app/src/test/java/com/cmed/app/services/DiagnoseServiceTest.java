package com.cmed.app.services;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.dtos.diagnoses.DiagnoseUpdateDto;
import com.cmed.app.mappers.diagnoses.DiagnoseCreateDtoMapper;

import com.cmed.app.mappers.diagnoses.DiagnoseUpdateDtoMapper;

import com.cmed.app.models.Diagnose;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.DiagnoseRepository;
import com.cmed.app.repositories.MedicalRecordRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
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
class DiagnoseServiceTest {

    @Mock
    private DiagnoseRepository diagnoseRepository;

    @Mock
    private MedicalRecordRepository  medicalRecordRepository;

    @Mock
    private DiagnoseCreateDtoMapper diagnoseCreateDtoMapper;

    @Mock
    private DiagnoseUpdateDtoMapper diagnoseUpdateDtoMapper;

    @InjectMocks
    private DiagnoseService diagnoseService;

    private MedicalRecord medicalRecord;
    private Diagnose diagnose;
    private UUID diagnoseId;

    private static final String DIAGNOSE_NOT_FOUND = "Diagnose not found: ";

    @BeforeEach
    void init() {
        diagnoseId = UUID.randomUUID();

        Patient patient = Patient.builder()
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

        medicalRecord = MedicalRecord.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .patient(patient)
                .description("General Checkup")
                .notes(new ArrayList<>())
                .diagnoses(new ArrayList<>())
                .files(new ArrayList<>())
                .build();

        diagnose = Diagnose.builder()
                .id(diagnoseId)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .medicalRecord(medicalRecord)
                .description("Headache")
                .prescription("Paracetamol")
                .build();
    }

    @Test
    void getAll_whenExists_returnsListOfDiagnoses() {
        when(diagnoseRepository.findAll()).thenReturn(List.of(diagnose));

        List<Diagnose> result = diagnoseService.getAll();

        assertEquals(1, result.size());
        verify(diagnoseRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(diagnoseRepository.findAll()).thenReturn(List.of());

        List<Diagnose> result = diagnoseService.getAll();

        assertTrue(result.isEmpty());
        verify(diagnoseRepository, times(1)).findAll();
    }

    @Test
    void getById_whenExists_returnsDiagnose() {
        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.of(diagnose));

        Diagnose result = diagnoseService.getById(diagnoseId);

        assertEquals(diagnose.getDescription(), result.getDescription());
        verify(diagnoseRepository, times(1)).findById(diagnoseId);
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> diagnoseService.getById(diagnoseId));
        assertEquals(DIAGNOSE_NOT_FOUND + diagnoseId, ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedDiagnose() {
        DiagnoseCreateDto dto = DiagnoseCreateDto.builder()
                .medicalRecordId(medicalRecord.getId().toString())
                .description(diagnose.getDescription())
                .prescription(diagnose.getPrescription())
                .build();

        when(diagnoseCreateDtoMapper.toDto(diagnose)).thenReturn(dto);
        when(diagnoseRepository.save(any(Diagnose.class))).thenReturn(diagnose);
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

        Diagnose result = diagnoseService.create(diagnoseCreateDtoMapper.toDto(diagnose));

        assertNotNull(result);
        assertEquals(diagnose.getDescription(), result.getDescription());
        verify(diagnoseRepository).save(any(Diagnose.class));
    }

    @Test
    void create_whenWrong_throwsException() {
        DiagnoseCreateDto dto = DiagnoseCreateDto.builder()
                .medicalRecordId(medicalRecord.getId().toString())
                .description(diagnose.getDescription())
                .prescription(diagnose.getPrescription())
                .build();

        when(diagnoseCreateDtoMapper.toDto(diagnose)).thenReturn(dto);
        when(diagnoseRepository.save(any(Diagnose.class))).thenThrow(new RuntimeException("Error during save"));
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> diagnoseService.create(diagnoseCreateDtoMapper.toDto(diagnose)));

        assertEquals("Error during save", ex.getMessage());
    }

    @Test
    void update_whenExists_updatesAndReturnsDiagnose() {
        Diagnose updated = Diagnose.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .medicalRecord(diagnose.getMedicalRecord())
                .description("Migraine")
                .prescription("Ibuprofen")
                .build();

        DiagnoseUpdateDto diagnoseUpdateDto = DiagnoseUpdateDto.builder()
                .description("Migraine")
                .prescription("Ibuprofen")
                .build();

        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.of(diagnose));
        when(diagnoseRepository.save(diagnose)).thenReturn(updated);
        when(diagnoseUpdateDtoMapper.toDto(updated)).thenReturn(diagnoseUpdateDto);

        Diagnose result = diagnoseService.update(diagnoseId, diagnoseUpdateDtoMapper.toDto(updated));

        assertEquals(updated.getDescription(), result.getDescription());
        assertEquals(updated.getPrescription(), result.getPrescription());
        verify(diagnoseRepository).save(diagnose);
    }

    @Test
    void update_whenNotExists_throwsException() {
        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> diagnoseService.update(diagnoseId, diagnoseUpdateDtoMapper.toDto(diagnose)));
        assertEquals(DIAGNOSE_NOT_FOUND + diagnoseId, ex.getMessage());
    }

    @Test
    void delete_whenExists_deletesDiagnose() {
        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.of(diagnose));
        doNothing().when(diagnoseRepository).delete(diagnose);

        diagnoseService.delete(diagnoseId);

        verify(diagnoseRepository).delete(diagnose);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(diagnoseRepository.findById(diagnoseId)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> diagnoseService.delete(diagnoseId));
        assertEquals(DIAGNOSE_NOT_FOUND + diagnoseId, ex.getMessage());
    }
}