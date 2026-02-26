package com.cmed.app.services;

import com.cmed.app.dtos.patients.*;
import com.cmed.app.exceptions.PatientNotFoundException;
import com.cmed.app.mappers.patients.*;
import com.cmed.app.models.Patient;
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
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @Mock
    private PatientDtoMapper patientDtoMapper;

    @Mock
    private PatientListDtoMapper patientListDtoMapper;

    @Mock
    private PatientCreateDtoMapper patientCreateDtoMapper;

    @Mock
    private PatientUpdateDtoMapper patientUpdateDtoMapper;

    @InjectMocks
    private PatientService patientService;

    private Patient patient;
    private static final String PATIENT_NOT_FOUND = "Patient not found: ";

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
                .phone("123456789")
                .dni("12345678A")
                .birthDate(LocalDate.of(1990, 1, 1))
                .allergies("Peanuts")
                .build();
    }

    @Test
    void getAll_whenExists_returnsListOfPatients() {
        PatientListDto patientListDto = new PatientListDto(
                patient.getId(),
                patient.getName(),
                patient.getLastName(),
                patient.getDni(),
                patient.getEmail(),
                patient.getBirthDate(),
                patient.getCreatedAt()
        );

        when(patientRepository.findAll()).thenReturn(List.of(patient));
        when(patientListDtoMapper.toDto(any(Patient.class))).thenReturn(patientListDto);

        List<PatientListDto> result = patientService.getAll();

        assertEquals(1, result.size());
        verify(patientRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(patientRepository.findAll()).thenReturn(List.of());

        List<PatientListDto> result = patientService.getAll();

        assertTrue(result.isEmpty());
        verify(patientRepository, times(1)).findAll();
    }

    @Test
    void getById_whenExists_returnsPatient() {
        PatientDto patientDto = new PatientDto(
                patient.getId(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                patient.getEmail(),
                patient.getName(),
                patient.getLastName(),
                patient.getPhone(),
                patient.getDni(),
                patient.getBirthDate(),
                patient.getAllergies(),
                Collections.emptyList()
        );

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(patientDtoMapper.toDto(any(Patient.class))).thenReturn(patientDto);

        PatientDto result = patientService.getById(patient.getId());

        assertNotNull(result);
        assertEquals(patient.getId(), result.id());
        assertEquals(patient.getEmail(), result.email());
        assertEquals(patient.getName(), result.name());
        assertEquals(patient.getLastName(), result.lastName());
        assertEquals(patient.getPhone(), result.phone());
        assertEquals(patient.getDni(), result.dni());
        assertEquals(patient.getBirthDate(), result.birthDate());
        verify(patientRepository, times(1)).findById(patient.getId());
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.empty());

        PatientNotFoundException ex = assertThrows(PatientNotFoundException.class,
                () -> patientService.getById(patient.getId()));
        assertEquals(PATIENT_NOT_FOUND + patient.getId(), ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedPatient() {
        PatientCreateDto patientCreateDto = PatientCreateDto.builder()
                .email(patient.getEmail())
                .name(patient.getName())
                .lastName(patient.getLastName())
                .phone(patient.getPhone())
                .dni(patient.getDni())
                .birthDate(patient.getBirthDate())
                .build();

        PatientDto patientDto = new PatientDto(
                patient.getId(),
                patient.getCreatedAt(),
                patient.getUpdatedAt(),
                patient.getEmail(),
                patient.getName(),
                patient.getLastName(),
                patient.getPhone(),
                patient.getDni(),
                patient.getBirthDate(),
                patient.getAllergies(),
                Collections.emptyList()
        );

        when(patientCreateDtoMapper.toEntity(patientCreateDto)).thenReturn(patient);
        when(patientRepository.save(any(Patient.class))).thenReturn(patient);
        when(patientDtoMapper.toDto(any(Patient.class))).thenReturn(patientDto);

        PatientDto result = patientService.create(patientCreateDto);

        assertNotNull(result);
        assertEquals(patient.getEmail(), result.email());
        assertEquals(patient.getName(), result.name());
        assertEquals(patient.getLastName(), result.lastName());
        assertEquals(patient.getPhone(), result.phone());
        assertEquals(patient.getDni(), result.dni());
        assertEquals(patient.getBirthDate(), result.birthDate());
        verify(patientRepository, times(1)).save(any(Patient.class));
    }

    @Test
    void update_whenExists_updatesAndReturnsPatient() {
        Patient updatedPatient = Patient.builder()
                .id(patient.getId())
                .createdAt(patient.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .deletedAt(patient.getDeletedAt())
                .email("updated@example.com")
                .name("Updated")
                .lastName("Patient")
                .phone("987654321")
                .dni(patient.getDni())
                .birthDate(LocalDate.of(1995, 1, 1))
                .allergies("Shellfish")
                .build();

        PatientDto updatedDto = new PatientDto(
                updatedPatient.getId(),
                updatedPatient.getCreatedAt(),
                updatedPatient.getUpdatedAt(),
                updatedPatient.getEmail(),
                updatedPatient.getName(),
                updatedPatient.getLastName(),
                updatedPatient.getPhone(),
                updatedPatient.getDni(),
                updatedPatient.getBirthDate(),
                updatedPatient.getAllergies(),
                Collections.emptyList()
        );

        PatientUpdateDto updateDto = PatientUpdateDto.builder()
                .email(updatedPatient.getEmail())
                .name(updatedPatient.getName())
                .lastName(updatedPatient.getLastName())
                .phone(updatedPatient.getPhone())
                .birthDate(updatedPatient.getBirthDate())
                .allergies(updatedPatient.getAllergies())
                .build();

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(patientRepository.save(patient)).thenReturn(updatedPatient);
        when(patientDtoMapper.toDto(updatedPatient)).thenReturn(updatedDto);

        PatientDto result = patientService.update(patient.getId(), updateDto);

        assertNotNull(result);
        assertEquals(updatedPatient.getEmail(), result.email());
        assertEquals(updatedPatient.getName(), result.name());
        assertEquals(updatedPatient.getLastName(), result.lastName());
        assertEquals(updatedPatient.getPhone(), result.phone());
        assertEquals(updatedPatient.getBirthDate(), result.birthDate());
        assertEquals(updatedPatient.getAllergies(), result.allergies());
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(patientRepository, times(1)).save(patient);
        verify(patientDtoMapper, times(1)).toDto(updatedPatient);
    }

    @Test
    void update_whenNotExists_throwsException() {
        PatientUpdateDto updateDto = PatientUpdateDto.builder()
                .email("test@example.com")
                .build();

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.empty());

        PatientNotFoundException ex = assertThrows(PatientNotFoundException.class,
                () -> patientService.update(patient.getId(), updateDto));
        assertEquals(PATIENT_NOT_FOUND + patient.getId(), ex.getMessage());
    }

    @Test
    void update_whenOnlyOneField_updatesOnlyThatField() {
        PatientUpdateDto updateDto = PatientUpdateDto.builder()
                .email("newemail@example.com")
                .build();

        Patient updatedPatient = Patient.builder()
                .id(patient.getId())
                .createdAt(patient.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .deletedAt(patient.getDeletedAt())
                .email("newemail@example.com")
                .name(patient.getName())
                .lastName(patient.getLastName())
                .phone(patient.getPhone())
                .dni(patient.getDni())
                .birthDate(patient.getBirthDate())
                .allergies(patient.getAllergies())
                .build();

        PatientDto updatedDto = new PatientDto(
                updatedPatient.getId(),
                updatedPatient.getCreatedAt(),
                updatedPatient.getUpdatedAt(),
                updatedPatient.getEmail(),
                updatedPatient.getName(),
                updatedPatient.getLastName(),
                updatedPatient.getPhone(),
                updatedPatient.getDni(),
                updatedPatient.getBirthDate(),
                updatedPatient.getAllergies(),
                Collections.emptyList()
        );

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(patientRepository.save(patient)).thenReturn(updatedPatient);
        when(patientDtoMapper.toDto(updatedPatient)).thenReturn(updatedDto);

        PatientDto result = patientService.update(patient.getId(), updateDto);

        assertNotNull(result);
        assertEquals("newemail@example.com", result.email());
        assertEquals(patient.getName(), result.name());
        assertEquals(patient.getLastName(), result.lastName());
        assertEquals(patient.getPhone(), result.phone());
        assertEquals(patient.getDni(), result.dni());
        assertEquals(patient.getBirthDate(), result.birthDate());
    }

    @Test
    void delete_whenExists_deletesPatient() {
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        doNothing().when(patientRepository).delete(patient);

        assertDoesNotThrow(() -> patientService.delete(patient.getId()));
        verify(patientRepository, times(1)).findById(patient.getId());
        verify(patientRepository, times(1)).delete(patient);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.empty());

        PatientNotFoundException ex = assertThrows(PatientNotFoundException.class,
                () -> patientService.delete(patient.getId()));
        assertEquals(PATIENT_NOT_FOUND + patient.getId(), ex.getMessage());
    }
}
