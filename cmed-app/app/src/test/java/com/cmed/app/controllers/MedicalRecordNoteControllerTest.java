
package com.cmed.app.controllers;

import com.cmed.app.dtos.notes.MedicalRecordNoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.mappers.notes.MedicalRecordNoteCreateDtoMapper;
import com.cmed.app.mappers.notes.MedicalRecordNoteCreateDtoMapperImpl;
import com.cmed.app.models.files.MedicalRecordFile;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.services.MedicalRecordNoteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = MedicalRecordNoteController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("MedicalRecordNoteController Tests")
class MedicalRecordNoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private MedicalRecordNoteService noteService;

    @MockitoBean
    private MedicalRecordRepository medicalRecordRepository;

    private MedicalRecordNoteCreateDtoMapper noteCreateDtoMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private MedicalRecordNote note;
    private MedicalRecordNote note2;
    private UUID noteId;
    private MedicalRecord medicalRecord;

    @BeforeEach
    void setUp() {
        noteCreateDtoMapper = new MedicalRecordNoteCreateDtoMapperImpl();

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

        note2 = new MedicalRecordNote();
        note2.setId(UUID.randomUUID());
        note2.setCreatedAt(LocalDateTime.now());
        note2.setUpdatedAt(LocalDateTime.now());
        note2.setMedicalRecord(medicalRecord);
        note2.setDescription("Fever");
    }

    @Nested
    @DisplayName("GET /api/medicalRecords/{medicalRecordId}/notes - Get All Notes")
    class GetAllNotesTests {

        @Test
        @DisplayName("Should return list of notes when notes exist")
        void getAllNotes_whenNotesExist_returnsList() throws Exception {
            when(noteService.getAllByMedicalRecordId(medicalRecord.getId())).thenReturn(List.of(note, note2));

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].description").value(note.getDescription()))
                    .andExpect(jsonPath("$[1].description").value(note2.getDescription()));

            verify(noteService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return empty list when no notes exist")
        void getAllNotes_whenNoNotesExist_returnsEmptyList() throws Exception {
            when(noteService.getAllByMedicalRecordId(medicalRecord.getId())).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(noteService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should handle service exception")
        void getAllNotes_whenServiceThrowsException_returnsServerError() throws Exception {
            when(noteService.getAllByMedicalRecordId(medicalRecord.getId())).thenThrow(new RuntimeException("Database error"));

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId()))
                    .andExpect(status().isInternalServerError());

            verify(noteService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }
    }

    @Nested
    @DisplayName("GET /api/medical-record-notes/{id} - Get Note by ID")
    class GetNoteByIdTests {

        @Test
        @DisplayName("Should return note when valid ID is provided")
        void getNoteById_whenValidId_returnsNote() throws Exception {
            when(noteService.getById(noteId)).thenReturn(note);

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(noteId.toString()))
                    .andExpect(jsonPath("$.description").value(note.getDescription()));

            verify(noteService, times(1)).getById(noteId);
        }

        @Test
        @DisplayName("Should return 404 when note not found")
        void getNoteById_whenNoteNotFound_returns404() throws Exception {
            when(noteService.getById(noteId)).thenThrow(new NoteNotFoundException("Note not found"));

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId))
                    .andExpect(status().isNotFound());

            verify(noteService, times(1)).getById(noteId);
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getNoteById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(noteService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/medicalRecords/{medicalRecordId}/notes - Create Note")
    class CreateNoteTests {

        @Test
        @DisplayName("Should create note with valid data")
        void createNote_withValidData_returnsCreatedNote() throws Exception {
            when(noteService.create(eq(medicalRecord.getId()), any(MedicalRecordNoteCreateDto.class))).thenReturn(note);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            MedicalRecordNoteCreateDto noteCreateDto = noteCreateDtoMapper.toDto(note);

            mockMvc.perform(post("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(noteCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.description").value(note.getDescription()));

            verify(noteService, times(1)).create(eq(medicalRecord.getId()), any(MedicalRecordNoteCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createNote_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(noteService, never()).create(any(UUID.class), any(MedicalRecordNoteCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createNote_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(noteService, never()).create(any(UUID.class), any(MedicalRecordNoteCreateDto.class));
        }

        @Test
        @DisplayName("Should create note with minimal required fields")
        void createNote_withMinimalFields_returnsCreatedNote() throws Exception {
            MedicalRecordNote minimalNote = new MedicalRecordNote();
            minimalNote.setMedicalRecord(medicalRecord);
            minimalNote.setDescription("Simple headache");

            when(noteService.create(eq(medicalRecord.getId()), any(MedicalRecordNoteCreateDto.class))).thenReturn(minimalNote);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            MedicalRecordNoteCreateDto noteCreateDto = noteCreateDtoMapper.toDto(minimalNote);

            mockMvc.perform(post("/api/medicalRecords/{medicalRecordId}/notes", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(noteCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value("Simple headache"));

            verify(noteService, times(1)).create(eq(medicalRecord.getId()), any(MedicalRecordNoteCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/medical-record-notes/{id} - Update Note")
    class UpdateNoteTests {

        @Test
        @DisplayName("Should update note with valid data")
        void updateNote_withValidData_returnsUpdatedNote() throws Exception {
            MedicalRecordNote updatedNote = new MedicalRecordNote();
            updatedNote.setId(noteId);
            updatedNote.setCreatedAt(note.getCreatedAt());
            updatedNote.setUpdatedAt(LocalDateTime.now());
            updatedNote.setMedicalRecord(medicalRecord);
            updatedNote.setDescription("Migraine");

            when(noteService.update(eq(noteId), any(NoteUpdateDto.class))).thenReturn(updatedNote);

            NoteUpdateDto updateDto = NoteUpdateDto.builder()
                    .description("Migraine")
                    .build();

            mockMvc.perform(patch("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(noteId.toString()))
                    .andExpect(jsonPath("$.description").value("Migraine"));

            verify(noteService, times(1)).update(eq(noteId), any(NoteUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when updating non-existent note")
        void updateNote_whenNoteNotFound_returns404() throws Exception {
            when(noteService.update(eq(noteId), any(NoteUpdateDto.class)))
                    .thenThrow(new NoteNotFoundException("Note not found"));

            NoteUpdateDto updateDto = NoteUpdateDto.builder()
                    .description("Migraine")
                    .build();

            mockMvc.perform(patch("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isNotFound());

            verify(noteService, times(1)).update(eq(noteId), any(NoteUpdateDto.class));
        }
    }

    @Nested
    @DisplayName("DELETE /api/medical-record-notes/{id} - Delete Note")
    class DeleteNoteTests {

        @Test
        @DisplayName("Should delete note when it exists")
        void deleteNote_whenExists_returnsNoContent() throws Exception {
            doNothing().when(noteService).delete(noteId);

            mockMvc.perform(delete("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId))
                    .andExpect(status().isNoContent());

            verify(noteService, times(1)).delete(noteId);
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent note")
        void deleteNote_whenNotFound_returns404() throws Exception {
            doThrow(new NoteNotFoundException("Note not found"))
                    .when(noteService).delete(noteId);

            mockMvc.perform(delete("/api/medicalRecords/{medicalRecordId}/notes/{id}", medicalRecord.getId(), noteId))
                    .andExpect(status().isNotFound());

            verify(noteService, times(1)).delete(noteId);
        }
    }
}