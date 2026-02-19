
package com.cmed.app.controllers;

import com.cmed.app.dtos.previousRecords.PreviousRecordCreateDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.cmed.app.exceptions.PreviousRecordNotFoundException;
import com.cmed.app.mappers.previousRecords.*;
import com.cmed.app.models.Diagnose;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.services.PreviousRecordService;
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

@WebMvcTest(controllers = PreviousRecordController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("PreviousRecordController Tests")
class PreviousRecordControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private PreviousRecordService previousRecordService;

    @MockitoBean
    private PreviousRecordRepository previousRecordRepository;

    private PreviousRecordDtoMapper previousRecordDtoMapper;

    private PreviousRecordListDtoMapper previousRecordListDtoMapper;

    private PreviousRecordCreateDtoMapper previousRecordCreateDtoMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private Patient patient;

    private Diagnose diagnose;
    private PreviousRecord previousRecord;
    private PreviousRecord previousRecord2;

    @BeforeEach
    void setUp() {
        previousRecordDtoMapper = new PreviousRecordDtoMapperImpl();
        previousRecordListDtoMapper = new PreviousRecordListDtoMapperImpl();
        previousRecordCreateDtoMapper = new PreviousRecordCreateDtoMapperImpl();

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

        previousRecord2 = PreviousRecord.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .patient(patient)
                .description("General Checkup 2")
                .files(new ArrayList<>())
                .build();
    }

    @Nested
    @DisplayName("GET /api/previousRecords - Get All PreviousRecords")
    class GetAllPreviousRecordsTests {

        @Test
        @DisplayName("Should return list of previousRecords when previousRecords exist")
        void getAllPreviousRecords_whenPreviousRecordsExist_returnsList() throws Exception {
            when(previousRecordService.getAll()).thenReturn(List.of(previousRecordListDtoMapper.toDto(previousRecord), previousRecordListDtoMapper.toDto(previousRecord2)));

            mockMvc.perform(get("/api/previousRecords"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].patientId").value(previousRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$[1].patientId").value(previousRecord2.getPatient().getId().toString()))
                    .andExpect(jsonPath("$[0].description").value(previousRecord.getDescription()))
                    .andExpect(jsonPath("$[1].description").value(previousRecord2.getDescription()));

            verify(previousRecordService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should return empty list when no previousRecords exist")
        void getAllPreviousRecords_whenNoPreviousRecordsExist_returnsEmptyList() throws Exception {
            when(previousRecordService.getAll()).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/previousRecords"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(previousRecordService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should handle service exception")
        void getAllPreviousRecords_whenServiceThrowsException_returnsServerError() throws Exception {
            when(previousRecordService.getAll()).thenThrow(new RuntimeException("Database error"));

            mockMvc.perform(get("/api/previousRecords"))
                    .andExpect(status().isInternalServerError());

            verify(previousRecordService, times(1)).getAll();
        }
    }

    @Nested
    @DisplayName("GET /api/previousRecords/{id} - Get PreviousRecord by ID")
    class GetPreviousRecordByIdTests {

        @Test
        @DisplayName("Should return previousRecord when valid ID is provided")
        void getPreviousRecordById_whenValidId_returnsPreviousRecord() throws Exception {
            when(previousRecordService.getById(previousRecord.getId())).thenReturn(previousRecordDtoMapper.toDto(previousRecord));

            mockMvc.perform(get("/api/previousRecords/{id}", previousRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(previousRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(previousRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(previousRecord.getDescription()));

            verify(previousRecordService, times(1)).getById(previousRecord.getId());
        }

        @Test
        @DisplayName("Should return 404 when previousRecord not found")
        void getPreviousRecordById_whenPreviousRecordNotFound_returns404() throws Exception {
            when(previousRecordService.getById(previousRecord.getId())).thenThrow(new PreviousRecordNotFoundException("PreviousRecord not found"));

            mockMvc.perform(get("/api/previousRecords/{id}", previousRecord.getId()))
                    .andExpect(status().isNotFound());

            verify(previousRecordService, times(1)).getById(previousRecord.getId());
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getPreviousRecordById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/previousRecords/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/previousRecords - Create PreviousRecord")
    class CreatePreviousRecordTests {

        @Test
        @DisplayName("Should create previousRecord with valid data")
        void createPreviousRecord_withValidData_returnsCreatedPreviousRecord() throws Exception {
            when(previousRecordService.create(any(PreviousRecordCreateDto.class))).thenReturn(previousRecordDtoMapper.toDto(previousRecord));
            when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.of(previousRecord));

            PreviousRecordCreateDto previousRecordCreateDto = previousRecordCreateDtoMapper.toDto(previousRecord);

            mockMvc.perform(post("/api/previousRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(previousRecordCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(previousRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(previousRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(previousRecord.getDescription()));

            verify(previousRecordService, times(1)).create(any(PreviousRecordCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createPreviousRecord_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/previousRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).create(any());
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createPreviousRecord_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/previousRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).create(any());
        }

        @Test
        @DisplayName("Should create previousRecord with minimal required fields")
        void createPreviousRecord_withMinimalFields_returnsCreatedPreviousRecord() throws Exception {
            PreviousRecord minimalPreviousRecord = new PreviousRecord();
            minimalPreviousRecord.setPatient(patient);
            minimalPreviousRecord.setDescription("Simple headache");

            when(previousRecordService.create(any(PreviousRecordCreateDto.class))).thenReturn(previousRecordDtoMapper.toDto(minimalPreviousRecord));
            when(previousRecordRepository.findById(previousRecord.getId())).thenReturn(Optional.of(previousRecord));

            PreviousRecordCreateDto previousRecordCreateDto = previousRecordCreateDtoMapper.toDto(minimalPreviousRecord);

            mockMvc.perform(post("/api/previousRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(previousRecordCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value("Simple headache"))
                    .andExpect(jsonPath("$.prescription").doesNotExist());

            verify(previousRecordService, times(1)).create(any(PreviousRecordCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/previousRecords/{id} - Update PreviousRecord")
    class UpdatePreviousRecordTests {

        @Test
        @DisplayName("Should update previousRecord with valid data")
        void updatePreviousRecord_withValidData_returnsUpdatedPreviousRecord() throws Exception {
            PreviousRecord updatedPreviousRecord = PreviousRecord.builder()
                    .id(previousRecord.getId())
                    .createdAt(previousRecord.getCreatedAt())
                    .updatedAt(LocalDateTime.now())
                    .deletedAt(previousRecord.getDeletedAt())
                    .patient(previousRecord.getPatient())
                    .description("New Description")
                    .files(previousRecord.getFiles())
                    .build();

            when(previousRecordService.update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class)))
                    .thenReturn(previousRecordDtoMapper.toDto(updatedPreviousRecord));

            mockMvc.perform(patch("/api/previousRecords/{id}", previousRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updatedPreviousRecord)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(previousRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(previousRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(updatedPreviousRecord.getDescription()));

            verify(previousRecordService, times(1)).update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when updating non-existent previousRecord")
        void updatePreviousRecord_whenPreviousRecordNotFound_returns404() throws Exception {
            when(previousRecordService.update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class)))
                    .thenThrow(new PreviousRecordNotFoundException("PreviousRecord not found"));

            mockMvc.perform(patch("/api/previousRecords/{id}", previousRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(previousRecord)))
                    .andExpect(status().isNotFound());

            verify(previousRecordService, times(1)).update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void updatePreviousRecord_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(patch("/api/previousRecords/{id}", "invalid-uuid")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(previousRecord)))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void updatePreviousRecord_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(patch("/api/previousRecords/{id}", previousRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).update(any(), any());
        }
    }

    @Nested
    @DisplayName("DELETE /api/previousRecords/{id} - Delete PreviousRecord")
    class DeletePreviousRecordTests {

        @Test
        @DisplayName("Should delete previousRecord when it exists")
        void deletePreviousRecord_whenExists_returnsNoContent() throws Exception {
            doNothing().when(previousRecordService).delete(previousRecord.getId());

            mockMvc.perform(delete("/api/previousRecords/{id}", previousRecord.getId()))
                    .andExpect(status().isNoContent());

            verify(previousRecordService, times(1)).delete(previousRecord.getId());
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent previousRecord")
        void deletePreviousRecord_whenNotFound_returns404() throws Exception {
            doThrow(new PreviousRecordNotFoundException("PreviousRecord not found"))
                    .when(previousRecordService).delete(previousRecord.getId());

            mockMvc.perform(delete("/api/previousRecords/{id}", previousRecord.getId()))
                    .andExpect(status().isNotFound());

            verify(previousRecordService, times(1)).delete(previousRecord.getId());
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void deletePreviousRecord_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(delete("/api/previousRecords/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(previousRecordService, never()).delete(any());
        }
    }

    @Nested
    @DisplayName("Edge Cases and Error Handling")
    class EdgeCasesTests {

        @Test
        @DisplayName("Should handle very long description")
        void createPreviousRecord_withLongDescription_shouldHandle() throws Exception {
            String longDescription = "A".repeat(1000);
            PreviousRecord longPreviousRecord = new PreviousRecord();
            longPreviousRecord.setPatient(patient);
            longPreviousRecord.setDescription(longDescription);;

            when(previousRecordService.create(any(PreviousRecordCreateDto.class)))
                    .thenReturn(previousRecordDtoMapper.toDto(longPreviousRecord));

            mockMvc.perform(post("/api/previousRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(previousRecordCreateDtoMapper.toDto(longPreviousRecord))))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value(longDescription));

            verify(previousRecordService, times(1)).create(any(PreviousRecordCreateDto.class));
        }

        @Test
        @DisplayName("Should handle null values in update")
        void updatePreviousRecord_withNullValues_shouldHandle() throws Exception {
            String jsonWithNulls = """
                {
                    "description": null,
                    "prescription": "Updated prescription"
                }
                """;

            PreviousRecord updatedPreviousRecord = PreviousRecord.builder()
                    .id(previousRecord.getId())
                    .createdAt(previousRecord.getCreatedAt())
                    .updatedAt(LocalDateTime.now())
                    .deletedAt(previousRecord.getDeletedAt())
                    .patient(previousRecord.getPatient())
                    .description(null)
                    .files(previousRecord.getFiles())
                    .build();

            when(previousRecordService.update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class)))
                    .thenReturn(previousRecordDtoMapper.toDto(updatedPreviousRecord));

            mockMvc.perform(patch("/api/previousRecords/{id}", previousRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(jsonWithNulls))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.description").isEmpty());

            verify(previousRecordService, times(1)).update(eq(previousRecord.getId()), any(PreviousRecordUpdateDto.class));
        }
    }
}