
package com.cmed.app.controllers;

import com.cmed.app.dtos.notes.NoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.Tracing;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.services.TracingService;
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

@WebMvcTest(controllers = TracingController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("TracingController Tests")
class TracingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private TracingService tracingService;

    @MockitoBean
    private MedicalRecordRepository medicalRecordRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private Tracing tracing;
    private Tracing tracing2;
    private UUID tracingId;
    private MedicalRecord medicalRecord;

    @BeforeEach
    void setUp() {
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

        tracing2 = new Tracing();
        tracing2.setId(UUID.randomUUID());
        tracing2.setCreatedAt(LocalDateTime.now());
        tracing2.setUpdatedAt(LocalDateTime.now());
        tracing2.setMedicalRecord(medicalRecord);
        tracing2.setDescription("Fever");
    }

    @Nested
    @DisplayName("GET /api/medical-records/{medicalRecordId}/tracings - Get All Tracings")
    class GetAllTracingsTests {

        @Test
        @DisplayName("Should return list of tracings when tracings exist")
        void getAllTracings_whenTracingsExist_returnsList() throws Exception {
            when(tracingService.getAllByMedicalRecordId(medicalRecord.getId())).thenReturn(List.of(tracing, tracing2));

            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].description").value(tracing.getDescription()))
                    .andExpect(jsonPath("$[1].description").value(tracing2.getDescription()));

            verify(tracingService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return empty list when no tracings exist")
        void getAllTracings_whenNoTracingsExist_returnsEmptyList() throws Exception {
            when(tracingService.getAllByMedicalRecordId(medicalRecord.getId())).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(tracingService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should handle service exception")
        void getAllTracings_whenServiceThrowsException_returnsServerError() throws Exception {
            when(tracingService.getAllByMedicalRecordId(medicalRecord.getId())).thenThrow(new RuntimeException("Database error"));

            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId()))
                    .andExpect(status().isInternalServerError());

            verify(tracingService, times(1)).getAllByMedicalRecordId(medicalRecord.getId());
        }
    }

    @Nested
    @DisplayName("GET /api/medical-records/{medicalRecordId}/tracings/{id} - Get Tracing by ID")
    class GetTracingByIdTests {

        @Test
        @DisplayName("Should return tracing when valid ID is provided")
        void getTracingById_whenValidId_returnsTracing() throws Exception {
            when(tracingService.getById(tracingId)).thenReturn(tracing);

            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(tracingId.toString()))
                    .andExpect(jsonPath("$.description").value(tracing.getDescription()));

            verify(tracingService, times(1)).getById(tracingId);
        }

        @Test
        @DisplayName("Should return 404 when tracing not found")
        void getTracingById_whenTracingNotFound_returns404() throws Exception {
            when(tracingService.getById(tracingId)).thenThrow(new NoteNotFoundException("Tracing not found"));

            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId))
                    .andExpect(status().isNotFound());

            verify(tracingService, times(1)).getById(tracingId);
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getTracingById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(tracingService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/medical-records/{medicalRecordId}/tracings - Create Tracing")
    class CreateTracingTests {

        @Test
        @DisplayName("Should create tracing with valid data")
        void createTracing_withValidData_returnsCreatedTracing() throws Exception {
            when(tracingService.create(eq(medicalRecord.getId()), any(NoteCreateDto.class))).thenReturn(tracing);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            NoteCreateDto createDto = NoteCreateDto.builder()
                    .description(tracing.getDescription())
                    .build();

            mockMvc.perform(post("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(createDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.description").value(tracing.getDescription()));

            verify(tracingService, times(1)).create(eq(medicalRecord.getId()), any(NoteCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createTracing_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(tracingService, never()).create(any(UUID.class), any(NoteCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createTracing_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(tracingService, never()).create(any(UUID.class), any(NoteCreateDto.class));
        }

        @Test
        @DisplayName("Should create tracing with minimal required fields")
        void createTracing_withMinimalFields_returnsCreatedTracing() throws Exception {
            Tracing minimalTracing = new Tracing();
            minimalTracing.setMedicalRecord(medicalRecord);
            minimalTracing.setDescription("Simple headache");

            when(tracingService.create(eq(medicalRecord.getId()), any(NoteCreateDto.class))).thenReturn(minimalTracing);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            NoteCreateDto createDto = NoteCreateDto.builder()
                    .description("Simple headache")
                    .build();

            mockMvc.perform(post("/api/medical-records/{medicalRecordId}/tracings", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(createDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value("Simple headache"));

            verify(tracingService, times(1)).create(eq(medicalRecord.getId()), any(NoteCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/medical-records/{medicalRecordId}/tracings/{id} - Update Tracing")
    class UpdateTracingTests {

        @Test
        @DisplayName("Should update tracing with valid data")
        void updateTracing_withValidData_returnsUpdatedTracing() throws Exception {
            Tracing updatedTracing = new Tracing();
            updatedTracing.setId(tracingId);
            updatedTracing.setCreatedAt(tracing.getCreatedAt());
            updatedTracing.setUpdatedAt(LocalDateTime.now());
            updatedTracing.setMedicalRecord(medicalRecord);
            updatedTracing.setDescription("Migraine");

            when(tracingService.update(eq(tracingId), any(NoteUpdateDto.class))).thenReturn(updatedTracing);

            NoteUpdateDto updateDto = NoteUpdateDto.builder()
                    .description("Migraine")
                    .build();

            mockMvc.perform(patch("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(tracingId.toString()))
                    .andExpect(jsonPath("$.description").value("Migraine"));

            verify(tracingService, times(1)).update(eq(tracingId), any(NoteUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when updating non-existent tracing")
        void updateTracing_whenTracingNotFound_returns404() throws Exception {
            when(tracingService.update(eq(tracingId), any(NoteUpdateDto.class)))
                    .thenThrow(new NoteNotFoundException("Tracing not found"));

            NoteUpdateDto updateDto = NoteUpdateDto.builder()
                    .description("Migraine")
                    .build();

            mockMvc.perform(patch("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isNotFound());

            verify(tracingService, times(1)).update(eq(tracingId), any(NoteUpdateDto.class));
        }
    }

    @Nested
    @DisplayName("DELETE /api/medical-records/{medicalRecordId}/tracings/{id} - Delete Tracing")
    class DeleteTracingTests {

        @Test
        @DisplayName("Should delete tracing when it exists")
        void deleteTracing_whenExists_returnsNoContent() throws Exception {
            doNothing().when(tracingService).delete(tracingId);

            mockMvc.perform(delete("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId))
                    .andExpect(status().isNoContent());

            verify(tracingService, times(1)).delete(tracingId);
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent tracing")
        void deleteTracing_whenNotFound_returns404() throws Exception {
            doThrow(new NoteNotFoundException("Tracing not found"))
                    .when(tracingService).delete(tracingId);

            mockMvc.perform(delete("/api/medical-records/{medicalRecordId}/tracings/{id}", medicalRecord.getId(), tracingId))
                    .andExpect(status().isNotFound());

            verify(tracingService, times(1)).delete(tracingId);
        }
    }
}
