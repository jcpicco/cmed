package com.cmed.app.services;

import com.cmed.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.cmed.app.mappers.medicalRecords.MedicalRecordCreateDtoMapper;
import com.cmed.app.mappers.medicalRecords.MedicalRecordDtoMapper;
import com.cmed.app.mappers.medicalRecords.MedicalRecordListDtoMapper;
import com.cmed.app.mappers.medicalRecords.MedicalRecordUpdateDtoMapper;
import com.cmed.app.models.*;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.PatientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

// TODO: Esto hay que cambiarlo porque los tests no prueban lógica real
@ExtendWith(MockitoExtension.class)
class MedicalRecordServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @Mock
    private MedicalRecordRepository medicalRecordRepository;

    @Mock
    private MedicalRecordDtoMapper medicalRecordDtoMapper;

    @Mock
    private MedicalRecordListDtoMapper medicalRecordListDtoMapper;

    @Mock
    private MedicalRecordCreateDtoMapper medicalRecordCreateDtoMapper;

    @Mock
    private MedicalRecordUpdateDtoMapper medicalRecordUpdateDtoMapper;

    @InjectMocks
    private MedicalRecordService medicalRecordService;

    private Patient patient;
    private MedicalRecordNote note;
    private Diagnose diagnose;
    private MedicalRecord medicalRecord;

    private static final String MEDICAL_RECORD_NOT_FOUND = "MedicalRecord not found: ";

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

        note = new MedicalRecordNote();
        note.setId(UUID.randomUUID());
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setDescription("Headache");
        
        diagnose = Diagnose.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .medicalRecord(medicalRecord)
                .description("Headache")
                .prescription("Paracetamol")
                .build();

        medicalRecord = MedicalRecord.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .patient(patient)
                .description("General Checkup")
                .notes(new ArrayList<>() {{
                    add(note);
                }})
                .diagnoses(new ArrayList<>() {{
                    add(diagnose);
                }})
                .files(new ArrayList<>())
                .build();

        note.setMedicalRecord(medicalRecord);
    }

    @Test
    void getAll_whenExists_returnsListOfMedicalRecords() {
        MedicalRecordListDto medicalRecordListDto = new MedicalRecordListDto(
                medicalRecord.getId(),
                LocalDateTime.now(),
                medicalRecord.getPatient().getId(),
                medicalRecord.getDescription()
        );

        when(medicalRecordRepository.findAll()).thenReturn(List.of(medicalRecord));
        when(medicalRecordListDtoMapper.toDto(any(MedicalRecord.class))).thenReturn(medicalRecordListDto);

        List<MedicalRecordListDto> result = medicalRecordService.getAll();

        assertEquals(1, result.size());
        verify(medicalRecordRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(medicalRecordRepository.findAll()).thenReturn(List.of());

        List<MedicalRecordListDto> result = medicalRecordService.getAll();

        assertTrue(result.isEmpty());
        verify(medicalRecordRepository, times(1)).findAll();
    }

    @Test
    void getAllByPatientId_whenExists_returnsListOfMedicalRecords() {
        MedicalRecordListDto medicalRecordListDto = new MedicalRecordListDto(
                medicalRecord.getId(),
                LocalDateTime.now(),
                medicalRecord.getPatient().getId(),
                medicalRecord.getDescription()
        );

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(medicalRecordRepository.findAllByPatientId(patient.getId())).thenReturn(List.of(medicalRecord));
        when(medicalRecordListDtoMapper.toDto(any(MedicalRecord.class))).thenReturn(medicalRecordListDto);

        List<MedicalRecordListDto> result = medicalRecordService.getAllByPatientId(patient.getId());

        assertEquals(1, result.size());
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(medicalRecordRepository, times(1)).findAllByPatientId(patient.getId());
    }

    @Test
    void getAllByPatientId_whenNotExists_returnsEmpty() {
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(medicalRecordRepository.findAllByPatientId(patient.getId())).thenReturn(List.of());

        List<MedicalRecordListDto> result = medicalRecordService.getAllByPatientId(patient.getId());

        assertTrue(result.isEmpty());
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(medicalRecordRepository, times(1)).findAllByPatientId(patient.getId());
    }

    @Test
    void getById_whenExists_returnsMedicalRecord() {
        MedicalRecordDto medicalRecordDto = new MedicalRecordDto(
                medicalRecord.getId(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                medicalRecord.getPatient().getId(),
                medicalRecord.getDescription(),
                new ArrayList<Note>(medicalRecord.getNotes()),
                medicalRecord.getDiagnoses()
        );

        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));
        when(medicalRecordDtoMapper.toDto(any(MedicalRecord.class))).thenReturn(medicalRecordDto);

        MedicalRecordDto result = medicalRecordService.getById(medicalRecord.getId());

        assertEquals(medicalRecord.getPatient().getId(), result.patientId());
        assertEquals(medicalRecord.getDescription(), result.description());
        assertEquals(medicalRecord.getNotes(), result.notes());
        assertEquals(medicalRecord.getDiagnoses(), result.diagnoses());
        verify(medicalRecordRepository, times(1)).findById(medicalRecord.getId());
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> medicalRecordService.getById(medicalRecord.getId()));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + medicalRecord.getId(), ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedMedicalRecord() {
        MedicalRecordCreateDto medicalRecordToCreateDto = MedicalRecordCreateDto.builder()
                .patientId(patient.getId().toString())
                .description(medicalRecord.getDescription())
                .build();

        MedicalRecordDto medicalRecordDto = new MedicalRecordDto(
                medicalRecord.getId(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                medicalRecord.getPatient().getId(),
                medicalRecord.getDescription(),
                new ArrayList<Note>(medicalRecord.getNotes()),
                medicalRecord.getDiagnoses()
        );

        when(medicalRecordRepository.save(any(MedicalRecord.class))).thenReturn(medicalRecord);
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(medicalRecordDtoMapper.toDto(any(MedicalRecord.class))).thenReturn(medicalRecordDto);

        MedicalRecordDto result = medicalRecordService.create(medicalRecordToCreateDto);

        assertNotNull(result);
        assertEquals(medicalRecord.getPatient().getId(), result.patientId());
        assertEquals(medicalRecord.getDescription(), result.description());
        assertEquals(medicalRecord.getNotes(), result.notes());
        assertEquals(medicalRecord.getDiagnoses(), result.diagnoses());
        verify(medicalRecordRepository).save(any(MedicalRecord.class));
    }

    @Test
    void create_whenWrong_throwsException() {
        MedicalRecordCreateDto dto = MedicalRecordCreateDto.builder()
                .patientId(patient.getId().toString())
                .description(medicalRecord.getDescription())
                .build();

        when(medicalRecordCreateDtoMapper.toDto(medicalRecord)).thenReturn(dto);

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> medicalRecordService.create(medicalRecordCreateDtoMapper.toDto(medicalRecord)));

        assertEquals("Patient not found", ex.getMessage());
    }

    @Test
    void update_whenExists_updatesAndReturnsMedicalRecord() {
        // Arrange
        MedicalRecord updatedMedicalRecord = MedicalRecord.builder()
                .id(medicalRecord.getId())
                .createdAt(medicalRecord.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .deletedAt(medicalRecord.getDeletedAt())
                .patient(medicalRecord.getPatient())
                .description("General Checkup UPDATED")
                .notes(medicalRecord.getNotes())
                .diagnoses(medicalRecord.getDiagnoses())
                .files(medicalRecord.getFiles())
                .build();

        MedicalRecordDto updatedDto = new MedicalRecordDto(
                updatedMedicalRecord.getId(),
                updatedMedicalRecord.getCreatedAt(),
                updatedMedicalRecord.getUpdatedAt(),
                updatedMedicalRecord.getPatient().getId(),
                updatedMedicalRecord.getDescription(),
                new ArrayList<Note>(updatedMedicalRecord.getNotes()),
                updatedMedicalRecord.getDiagnoses()
        );

        MedicalRecordUpdateDto updateDto = MedicalRecordUpdateDto.builder()
                .description(updatedMedicalRecord.getDescription())
                .build();

        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));
        when(medicalRecordRepository.save(medicalRecord)).thenReturn(updatedMedicalRecord);
        when(medicalRecordDtoMapper.toDto(updatedMedicalRecord)).thenReturn(updatedDto);

        // Act
        MedicalRecordDto result = medicalRecordService.update(medicalRecord.getId(), updateDto);

        // Assert
        assertNotNull(result);
        assertEquals("General Checkup UPDATED", result.description());
        verify(medicalRecordRepository, times(1)).findById(medicalRecord.getId());
        verify(medicalRecordRepository, times(1)).save(medicalRecord);
        verify(medicalRecordDtoMapper, times(1)).toDto(updatedMedicalRecord);
    }

    @Test
    void update_whenNotExists_throwsException() {
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> medicalRecordService.update(medicalRecord.getId(), medicalRecordUpdateDtoMapper.toDto(medicalRecord)));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + medicalRecord.getId(), ex.getMessage());
    }

    @Test
    void delete_whenExists_deletesMedicalRecord() {
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));
        doNothing().when(medicalRecordRepository).delete(medicalRecord);

        medicalRecordService.delete(medicalRecord.getId());

        verify(medicalRecordRepository).delete(medicalRecord);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> medicalRecordService.delete(medicalRecord.getId()));
        assertEquals(MEDICAL_RECORD_NOT_FOUND + medicalRecord.getId(), ex.getMessage());
    }
}