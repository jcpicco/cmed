package com.cmed.app.services;

import com.cmed.app.dtos.notes.MedicalRecordNoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.MedicalRecordNoteRepository;
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
class MedicalRecordNoteServiceTest {

    @Mock
    private MedicalRecordNoteRepository noteRepository;

    @Mock
    private MedicalRecordRepository medicalRecordRepository;

    @InjectMocks
    private MedicalRecordNoteService noteService;

    private MedicalRecord medicalRecord;
    private MedicalRecordNote note;
    private UUID noteId;

    private static final String NOTE_NOT_FOUND = "Note not found: ";

    @BeforeEach
    void init() {
        noteId = UUID.randomUUID();

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

        note = new MedicalRecordNote();
        note.setId(noteId);
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setMedicalRecord(medicalRecord);
        note.setDescription("Headache");
    }

    @Test
    void getAll_whenExists_returnsListOfNotes() {
        when(noteRepository.findAll()).thenReturn(List.of(note));

        List<MedicalRecordNote> result = noteService.getAll();

        assertEquals(1, result.size());
        verify(noteRepository, times(1)).findAll();
    }

    @Test
    void getAll_whenNotExists_returnsEmpty() {
        when(noteRepository.findAll()).thenReturn(List.of());

        List<MedicalRecordNote> result = noteService.getAll();

        assertTrue(result.isEmpty());
        verify(noteRepository, times(1)).findAll();
    }

    @Test
    void getById_whenExists_returnsNote() {
        when(noteRepository.findById(noteId)).thenReturn(Optional.of(note));

        MedicalRecordNote result = noteService.getById(noteId);

        assertEquals(note.getDescription(), result.getDescription());
        verify(noteRepository, times(1)).findById(noteId);
    }

    @Test
    void getById_whenNotExists_throwsException() {
        when(noteRepository.findById(noteId)).thenReturn(Optional.empty());

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> noteService.getById(noteId));
        assertEquals(NOTE_NOT_FOUND + noteId, ex.getMessage());
    }

    @Test
    void create_whenCorrect_returnsSavedNote() {
        MedicalRecordNoteCreateDto dto = MedicalRecordNoteCreateDto.builder()
                .description(note.getDescription())
                .build();

        when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));
        when(noteRepository.save(any(MedicalRecordNote.class))).thenReturn(note);

        MedicalRecordNote result = noteService.create(medicalRecord.getId(), dto);

        assertNotNull(result);
        assertEquals(note.getDescription(), result.getDescription());
        verify(noteRepository).save(any(MedicalRecordNote.class));
    }

    @Test
    void update_whenExists_updatesAndReturnsNote() {
        MedicalRecordNote updated = new MedicalRecordNote();
        updated.setId(UUID.randomUUID());
        updated.setCreatedAt(LocalDateTime.now());
        updated.setUpdatedAt(LocalDateTime.now());
        updated.setMedicalRecord(note.getMedicalRecord());
        updated.setDescription("Note example");

        NoteUpdateDto noteUpdateDto = NoteUpdateDto.builder()
                .description("Note example")
                .build();

        when(noteRepository.findById(noteId)).thenReturn(Optional.of(note));
        when(noteRepository.save(any(MedicalRecordNote.class))).thenReturn(updated);

        MedicalRecordNote result = noteService.update(noteId, noteUpdateDto);

        assertEquals(updated.getDescription(), result.getDescription());
        verify(noteRepository).save(note);
    }

    @Test
    void update_whenNotExists_throwsException() {
        when(noteRepository.findById(noteId)).thenReturn(Optional.empty());

        NoteUpdateDto updateDto = NoteUpdateDto.builder().description("test").build();

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> noteService.update(noteId, updateDto));
        assertEquals(NOTE_NOT_FOUND + noteId, ex.getMessage());
    }

    @Test
    void delete_whenExists_deletesNote() {
        when(noteRepository.findById(noteId)).thenReturn(Optional.of(note));
        doNothing().when(noteRepository).delete(note);

        noteService.delete(noteId);

        verify(noteRepository).delete(note);
    }

    @Test
    void delete_whenNotExists_throwsException() {
        when(noteRepository.findById(noteId)).thenReturn(Optional.empty());

        NoteNotFoundException ex = assertThrows(NoteNotFoundException.class,
                () -> noteService.delete(noteId));
        assertEquals(NOTE_NOT_FOUND + noteId, ex.getMessage());
    }
}