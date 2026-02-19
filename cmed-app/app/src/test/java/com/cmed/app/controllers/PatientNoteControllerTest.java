package com.cmed.app.controllers;

import com.cmed.app.dtos.notes.PatientNoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.notes.PatientNote;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.PatientRepository;
import com.cmed.app.services.PatientNoteService;
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
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = PatientNoteController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("PatientNoteController Tests")
class PatientNoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private PatientNoteService noteService;

    @MockitoBean
    private PatientRepository patientRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private PatientNote note;
    private PatientNote note2;
    private UUID noteId;
    private Patient patient;

    @BeforeEach
    void setUp() {
        noteId = UUID.randomUUID();

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

        note = new PatientNote();
        note.setId(noteId);
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setPatient(patient);
        note.setDescription("Patient reported feeling better.");

        note2 = new PatientNote();
        note2.setId(UUID.randomUUID());
        note2.setCreatedAt(LocalDateTime.now());
        note2.setUpdatedAt(LocalDateTime.now());
        note2.setPatient(patient);
        note2.setDescription("Follow-up appointment scheduled.");
    }

    @Nested
    @DisplayName("GET /api/patients/{patientId}/notes - Get All Notes")
    class GetAllNotesTests {

        @Test
        @DisplayName("Should return list of notes when notes exist")
        void getAllNotes_whenNotesExist_returnsList() throws Exception {
            when(noteService.getAllByPatientId(patient.getId())).thenReturn(List.of(note, note2));

            mockMvc.perform(get("/api/patients/{patientId}/notes", patient.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].description").value(note.getDescription()))
                    .andExpect(jsonPath("$[1].description").value(note2.getDescription()));

            verify(noteService, times(1)).getAllByPatientId(patient.getId());
        }

        @Test
        @DisplayName("Should return empty list when no notes exist")
        void getAllNotes_whenNoNotesExist_returnsEmptyList() throws Exception {
            when(noteService.getAllByPatientId(patient.getId())).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/patients/{patientId}/notes", patient.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(noteService, times(1)).getAllByPatientId(patient.getId());
        }
    }

    @Nested
    @DisplayName("GET /api/patient-notes/{id} - Get Note by ID")
    class GetNoteByIdTests {

        @Test
        @DisplayName("Should return note when valid ID is provided")
        void getNoteById_whenValidId_returnsNote() throws Exception {
            when(noteService.getById(noteId)).thenReturn(note);

            mockMvc.perform(get("/api/patients/{patientId}/notes/{id}", patient.getId(), noteId))
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

            mockMvc.perform(get("/api/patients/{patientId}/notes/{id}", patient.getId(), noteId))
                    .andExpect(status().isNotFound());

            verify(noteService, times(1)).getById(noteId);
        }
    }

    @Nested
    @DisplayName("POST /api/patients/{patientId}/notes - Create Note")
    class CreateNoteTests {

        @Test
        @DisplayName("Should create note with valid data")
        void createNote_withValidData_returnsCreatedNote() throws Exception {
            when(noteService.create(eq(patient.getId()), any(PatientNoteCreateDto.class))).thenReturn(note);
            when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));

            PatientNoteCreateDto noteCreateDto = PatientNoteCreateDto.builder()

                    .description("Patient reported feeling better.")
                    .build();

            mockMvc.perform(post("/api/patients/{patientId}/notes", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(noteCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.description").value(note.getDescription()));

            verify(noteService, times(1)).create(eq(patient.getId()), any(PatientNoteCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createNote_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/patients/{patientId}/notes", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(noteService, never()).create(any(UUID.class), any(PatientNoteCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/patient-notes/{id} - Update Note")
    class UpdateNoteTests {

        @Test
        @DisplayName("Should update note with valid data")
        void updateNote_withValidData_returnsUpdatedNote() throws Exception {
            PatientNote updatedNote = new PatientNote();
            updatedNote.setId(noteId);
            updatedNote.setCreatedAt(note.getCreatedAt());
            updatedNote.setUpdatedAt(LocalDateTime.now());
            updatedNote.setPatient(patient);
            updatedNote.setDescription("Updated description");

            when(noteService.update(eq(noteId), any(NoteUpdateDto.class))).thenReturn(updatedNote);

            NoteUpdateDto updateDto = NoteUpdateDto.builder()
                    .description("Updated description")
                    .build();

            mockMvc.perform(patch("/api/patients/{patientId}/notes/{id}", patient.getId(), noteId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(noteId.toString()))
                    .andExpect(jsonPath("$.description").value("Updated description"));

            verify(noteService, times(1)).update(eq(noteId), any(NoteUpdateDto.class));
        }
    }

    @Nested
    @DisplayName("DELETE /api/patient-notes/{id} - Delete Note")
    class DeleteNoteTests {

        @Test
        @DisplayName("Should delete note when it exists")
        void deleteNote_whenExists_returnsNoContent() throws Exception {
            doNothing().when(noteService).delete(noteId);

            mockMvc.perform(delete("/api/patients/{patientId}/notes/{id}", patient.getId(), noteId))
                    .andExpect(status().isNoContent());

            verify(noteService, times(1)).delete(noteId);
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent note")
        void deleteNote_whenNotFound_returns404() throws Exception {
            doThrow(new NoteNotFoundException("Note not found"))
                    .when(noteService).delete(noteId);

            mockMvc.perform(delete("/api/patients/{patientId}/notes/{id}", patient.getId(), noteId))
                    .andExpect(status().isNotFound());

            verify(noteService, times(1)).delete(noteId);
        }
    }
}
