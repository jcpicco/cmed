package com.cmed.app.controllers;

import com.cmed.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.mappers.medicalRecords.*;
import com.cmed.app.models.*;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.services.MedicalRecordService;
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

@WebMvcTest(controllers = MedicalRecordController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("MedicalRecordController Tests")
class MedicalRecordControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private MedicalRecordService medicalRecordService;

    @MockitoBean
    private MedicalRecordRepository medicalRecordRepository;

    private MedicalRecordDtoMapper medicalRecordDtoMapper;

    private MedicalRecordListDtoMapper medicalRecordListDtoMapper;

    private MedicalRecordCreateDtoMapper medicalRecordCreateDtoMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private Patient patient;
    private MedicalRecordNote note;
    private Diagnose diagnose;
    private MedicalRecord medicalRecord;
    private MedicalRecord medicalRecord2;

    @BeforeEach
    void setUp() {
        medicalRecordDtoMapper = new MedicalRecordDtoMapperImpl();
        medicalRecordListDtoMapper = new MedicalRecordListDtoMapperImpl();
        medicalRecordCreateDtoMapper = new MedicalRecordCreateDtoMapperImpl();

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

        medicalRecord2 = MedicalRecord.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .patient(patient)
                .description("General Checkup 2")
                .notes(new ArrayList<>())
                .diagnoses(new ArrayList<>())
                .files(new ArrayList<>())
                .build();
    }

    @Nested
    @DisplayName("GET /api/medicalRecords - Get All MedicalRecords")
    class GetAllMedicalRecordsTests {

        @Test
        @DisplayName("Should return list of medicalRecords when medicalRecords exist")
        void getAllMedicalRecords_whenMedicalRecordsExist_returnsList() throws Exception {
            when(medicalRecordService.getAll()).thenReturn(List.of(medicalRecordListDtoMapper.toDto(medicalRecord), medicalRecordListDtoMapper.toDto(medicalRecord2)));

            mockMvc.perform(get("/api/medicalRecords"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].patientId").value(medicalRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$[1].patientId").value(medicalRecord2.getPatient().getId().toString()))
                    .andExpect(jsonPath("$[0].description").value(medicalRecord.getDescription()))
                    .andExpect(jsonPath("$[1].description").value(medicalRecord2.getDescription()));

            verify(medicalRecordService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should return empty list when no medicalRecords exist")
        void getAllMedicalRecords_whenNoMedicalRecordsExist_returnsEmptyList() throws Exception {
            when(medicalRecordService.getAll()).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/medicalRecords"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(medicalRecordService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should handle service exception")
        void getAllMedicalRecords_whenServiceThrowsException_returnsServerError() throws Exception {
            when(medicalRecordService.getAll()).thenThrow(new RuntimeException("Database error"));

            mockMvc.perform(get("/api/medicalRecords"))
                    .andExpect(status().isInternalServerError());

            verify(medicalRecordService, times(1)).getAll();
        }
    }

    @Nested
    @DisplayName("GET /api/medicalRecords/{id} - Get MedicalRecord by ID")
    class GetMedicalRecordByIdTests {

        @Test
        @DisplayName("Should return medicalRecord when valid ID is provided")
        void getMedicalRecordById_whenValidId_returnsMedicalRecord() throws Exception {
            when(medicalRecordService.getById(medicalRecord.getId())).thenReturn(medicalRecordDtoMapper.toDto(medicalRecord));

            mockMvc.perform(get("/api/medicalRecords/{id}", medicalRecord.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(medicalRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(medicalRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(medicalRecord.getDescription()))
                    .andExpect(jsonPath("$.notes").isArray())
                    .andExpect(jsonPath("$.notes", hasSize(1)))
                    .andExpect(jsonPath("$.diagnoses").isArray())
                    .andExpect(jsonPath("$.diagnoses", hasSize(1)));

            verify(medicalRecordService, times(1)).getById(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return 404 when medicalRecord not found")
        void getMedicalRecordById_whenMedicalRecordNotFound_returns404() throws Exception {
            when(medicalRecordService.getById(medicalRecord.getId())).thenThrow(new MedicalRecordNotFoundException("MedicalRecord not found"));

            mockMvc.perform(get("/api/medicalRecords/{id}", medicalRecord.getId()))
                    .andExpect(status().isNotFound());

            verify(medicalRecordService, times(1)).getById(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getMedicalRecordById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/medicalRecords/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/medicalRecords - Create MedicalRecord")
    class CreateMedicalRecordTests {

        @Test
        @DisplayName("Should create medicalRecord with valid data")
        void createMedicalRecord_withValidData_returnsCreatedMedicalRecord() throws Exception {
            when(medicalRecordService.create(any(MedicalRecordCreateDto.class))).thenReturn(medicalRecordDtoMapper.toDto(medicalRecord));
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            MedicalRecordCreateDto medicalRecordCreateDto = medicalRecordCreateDtoMapper.toDto(medicalRecord);

            mockMvc.perform(post("/api/medicalRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(medicalRecordCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(medicalRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(medicalRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(medicalRecord.getDescription()))
                    .andExpect(jsonPath("$.notes").isArray())
                    .andExpect(jsonPath("$.notes", hasSize(1)))
                    .andExpect(jsonPath("$.diagnoses").isArray())
                    .andExpect(jsonPath("$.diagnoses", hasSize(1)));

            verify(medicalRecordService, times(1)).create(any(MedicalRecordCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createMedicalRecord_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/medicalRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).create(any());
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createMedicalRecord_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/medicalRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).create(any());
        }

        @Test
        @DisplayName("Should create medicalRecord with minimal required fields")
        void createMedicalRecord_withMinimalFields_returnsCreatedMedicalRecord() throws Exception {
            MedicalRecord minimalMedicalRecord = new MedicalRecord();
            minimalMedicalRecord.setPatient(patient);
            minimalMedicalRecord.setDescription("Simple headache");

            when(medicalRecordService.create(any(MedicalRecordCreateDto.class))).thenReturn(medicalRecordDtoMapper.toDto(minimalMedicalRecord));
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            MedicalRecordCreateDto medicalRecordCreateDto = medicalRecordCreateDtoMapper.toDto(minimalMedicalRecord);

            mockMvc.perform(post("/api/medicalRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(medicalRecordCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value("Simple headache"))
                    .andExpect(jsonPath("$.prescription").doesNotExist());

            verify(medicalRecordService, times(1)).create(any(MedicalRecordCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/medicalRecords/{id} - Update MedicalRecord")
    class UpdateMedicalRecordTests {

        @Test
        @DisplayName("Should update medicalRecord with valid data")
        void updateMedicalRecord_withValidData_returnsUpdatedMedicalRecord() throws Exception {
            MedicalRecord updatedMedicalRecord = MedicalRecord.builder()
                    .id(medicalRecord.getId())
                    .createdAt(medicalRecord.getCreatedAt())
                    .updatedAt(LocalDateTime.now())
                    .deletedAt(medicalRecord.getDeletedAt())
                    .patient(medicalRecord.getPatient())
                    .description("New Description")
                    .notes(medicalRecord.getNotes())
                    .diagnoses(medicalRecord.getDiagnoses())
                    .files(medicalRecord.getFiles())
                    .build();

            when(medicalRecordService.update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class)))
                    .thenReturn(medicalRecordDtoMapper.toDto(updatedMedicalRecord));

            mockMvc.perform(patch("/api/medicalRecords/{id}", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updatedMedicalRecord)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(medicalRecord.getId().toString()))
                    .andExpect(jsonPath("$.patientId").value(medicalRecord.getPatient().getId().toString()))
                    .andExpect(jsonPath("$.description").value(updatedMedicalRecord.getDescription()))
                    .andExpect(jsonPath("$.notes").isArray())
                    .andExpect(jsonPath("$.notes", hasSize(1)))
                    .andExpect(jsonPath("$.diagnoses").isArray())
                    .andExpect(jsonPath("$.diagnoses", hasSize(1)));

            verify(medicalRecordService, times(1)).update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when updating non-existent medicalRecord")
        void updateMedicalRecord_whenMedicalRecordNotFound_returns404() throws Exception {
            when(medicalRecordService.update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class)))
                    .thenThrow(new MedicalRecordNotFoundException("MedicalRecord not found"));

            mockMvc.perform(patch("/api/medicalRecords/{id}", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(medicalRecord)))
                    .andExpect(status().isNotFound());

            verify(medicalRecordService, times(1)).update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void updateMedicalRecord_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(patch("/api/medicalRecords/{id}", "invalid-uuid")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(medicalRecord)))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void updateMedicalRecord_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(patch("/api/medicalRecords/{id}", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).update(any(), any());
        }
    }

    @Nested
    @DisplayName("DELETE /api/medicalRecords/{id} - Delete MedicalRecord")
    class DeleteMedicalRecordTests {

        @Test
        @DisplayName("Should delete medicalRecord when it exists")
        void deleteMedicalRecord_whenExists_returnsNoContent() throws Exception {
            doNothing().when(medicalRecordService).delete(medicalRecord.getId());

            mockMvc.perform(delete("/api/medicalRecords/{id}", medicalRecord.getId()))
                    .andExpect(status().isNoContent());

            verify(medicalRecordService, times(1)).delete(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent medicalRecord")
        void deleteMedicalRecord_whenNotFound_returns404() throws Exception {
            doThrow(new MedicalRecordNotFoundException("MedicalRecord not found"))
                    .when(medicalRecordService).delete(medicalRecord.getId());

            mockMvc.perform(delete("/api/medicalRecords/{id}", medicalRecord.getId()))
                    .andExpect(status().isNotFound());

            verify(medicalRecordService, times(1)).delete(medicalRecord.getId());
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void deleteMedicalRecord_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(delete("/api/medicalRecords/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordService, never()).delete(any());
        }
    }

    @Nested
    @DisplayName("Edge Cases and Error Handling")
    class EdgeCasesTests {

        @Test
        @DisplayName("Should handle very long description")
        void createMedicalRecord_withLongDescription_shouldHandle() throws Exception {
            String longDescription = "A".repeat(1000);
            MedicalRecord longMedicalRecord = new MedicalRecord();
            longMedicalRecord.setPatient(patient);
            longMedicalRecord.setDescription(longDescription);;

            when(medicalRecordService.create(any(MedicalRecordCreateDto.class)))
                    .thenReturn(medicalRecordDtoMapper.toDto(longMedicalRecord));

            mockMvc.perform(post("/api/medicalRecords")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(medicalRecordCreateDtoMapper.toDto(longMedicalRecord))))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value(longDescription));

            verify(medicalRecordService, times(1)).create(any(MedicalRecordCreateDto.class));
        }

        @Test
        @DisplayName("Should handle null values in update")
        void updateMedicalRecord_withNullValues_shouldHandle() throws Exception {
            String jsonWithNulls = """
                {
                    "description": null,
                    "prescription": "Updated prescription"
                }
                """;

            MedicalRecord updatedMedicalRecord = MedicalRecord.builder()
                    .id(medicalRecord.getId())
                    .createdAt(medicalRecord.getCreatedAt())
                    .updatedAt(LocalDateTime.now())
                    .deletedAt(medicalRecord.getDeletedAt())
                    .patient(medicalRecord.getPatient())
                    .description(null)
                    .notes(medicalRecord.getNotes())
                    .diagnoses(medicalRecord.getDiagnoses())
                    .files(medicalRecord.getFiles())
                    .build();

            when(medicalRecordService.update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class)))
                    .thenReturn(medicalRecordDtoMapper.toDto(updatedMedicalRecord));

            mockMvc.perform(patch("/api/medicalRecords/{id}", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(jsonWithNulls))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.description").isEmpty());

            verify(medicalRecordService, times(1)).update(eq(medicalRecord.getId()), any(MedicalRecordUpdateDto.class));
        }
    }
}