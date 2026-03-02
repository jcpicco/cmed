package com.cmed.app.services;

import com.cmed.app.dtos.notes.NoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.Tracing;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.TracingRepository;
import com.cmed.app.repositories.MedicalRecordRepository;
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

@ExtendWith(MockitoExtension.class)
class TracingServiceTest {

    @Mock
    private TracingRepository tracingRepository;

    @Mock
    private MedicalRecordRepository medicalRecordRepository;

    @InjectMocks
    private TracingService tracingService;

    private MedicalRecord medicalRecord;
    private Tracing tracing;
    private UUID tracingId;

    private static final String TRACING_NOT_FOUND = "Tracing not found: ";

    @BeforeEach
    void init() {
        tracingId = UUID.randomUUID();

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
                .files(new ArrayList<>())
                .build();

        tracing = new Tracing();
        tracing.setId(tracingId);
        tracing.setCreatedAt(LocalDateTime.now());
        tracing.setUpdatedAt(LocalDateTime.now());
        tracing.setMedicalRecord(medicalRecord);
        tracing.setDescription("Headache");
    }

    @Test
    void getAll_whenExists_returnsListOfNotes() {
        when(tracingRepository.findAll()).thenReturn(List.of(tracing));

        List<Tracing> result = tracingService.getAll();

        assertEquals(1, result.size());
        verify(tracingRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(tracingRepository.findAll()).thenReturn(List.of());

        List<Tracing> result = tracingService.getAll();

        assertTrue(result.isEmpty());
        verify(tracingRepository, times(1)).findAll();
    }

    @Test
    void getById_whenExists_returnsNote() {
        when(tracingRepository.findById(tracingId)).thenReturn(Optional.of(tracing));

        Tracing result = tracingService.getById(tracingId);

        assertEquals(tracing.getDescription(), result.getDescription());
        verify(tracingRepository, times(1)).findById(tracingId);
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(tracingRepository.findById(tracingId)).thenReturn(Optional.empty());

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> tracingService.getById(tracingId));
        assertEquals(TRACING_NOT_FOUND + tracingId, ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedNote() {
        NoteCreateDto dto = NoteCreateDto.builder()
                .description(tracing.getDescription())
                .build();

        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));
        when(tracingRepository.save(any(Tracing.class))).thenReturn(tracing);

        Tracing result = tracingService.create(medicalRecord.getId(), dto);

        assertNotNull(result);
        assertEquals(tracing.getDescription(), result.getDescription());
        verify(tracingRepository).save(any(Tracing.class));
    }

    @Test
    void update_whenExists_updatesAndReturnsNote() {
        Tracing updated = new Tracing();
        updated.setId(UUID.randomUUID());
        updated.setCreatedAt(LocalDateTime.now());
        updated.setUpdatedAt(LocalDateTime.now());
        updated.setMedicalRecord(tracing.getMedicalRecord());
        updated.setDescription("Note example");

        NoteUpdateDto noteUpdateDto = NoteUpdateDto.builder()
                .description("Note example")
                .build();

        when(tracingRepository.findById(tracingId)).thenReturn(Optional.of(tracing));
        when(tracingRepository.save(any(Tracing.class))).thenReturn(updated);

        Tracing result = tracingService.update(tracingId, noteUpdateDto);

        assertEquals(updated.getDescription(), result.getDescription());
        verify(tracingRepository).save(tracing);
    }

    @Test
    void update_whenNotExists_throwsException() {
        when(tracingRepository.findById(tracingId)).thenReturn(Optional.empty());

        NoteUpdateDto updateDto = NoteUpdateDto.builder().description("test").build();

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> tracingService.update(tracingId, updateDto));
        assertEquals(TRACING_NOT_FOUND + tracingId, ex.getMessage());
    }

    @Test
    void delete_whenExists_deletesNote() {
        when(tracingRepository.findById(tracingId)).thenReturn(Optional.of(tracing));
        doNothing().when(tracingRepository).delete(tracing);

        tracingService.delete(tracingId);

        verify(tracingRepository).delete(tracing);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(tracingRepository.findById(tracingId)).thenReturn(Optional.empty());

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> tracingService.delete(tracingId));
        assertEquals(TRACING_NOT_FOUND + tracingId, ex.getMessage());
    }
}