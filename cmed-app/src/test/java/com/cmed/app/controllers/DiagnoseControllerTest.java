
package com.cmed.app.controllers;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.dtos.diagnoses.DiagnoseUpdateDto;
import com.cmed.app.exceptions.DiagnoseNotFoundException;
import com.cmed.app.mappers.diagnoses.DiagnoseCreateDtoMapper;
import com.cmed.app.mappers.diagnoses.DiagnoseCreateDtoMapperImpl;
import com.cmed.app.models.Diagnose;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.services.DiagnoseService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = DiagnoseController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("DiagnoseController Tests")
class DiagnoseControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DiagnoseService diagnoseService;

    @MockitoBean
    private MedicalRecordRepository medicalRecordRepository;

    private DiagnoseCreateDtoMapper diagnoseCreateDtoMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private Diagnose diagnose;
    private Diagnose diagnose2;
    private UUID diagnoseId;
    private MedicalRecord medicalRecord;

    @BeforeEach
    void setUp() {
        diagnoseCreateDtoMapper = new DiagnoseCreateDtoMapperImpl();

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
                .protocol("Resting")
                .build();

        diagnose2 = Diagnose.builder()
                .id(diagnoseId)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .medicalRecord(medicalRecord)
                .description("Fever")
                .prescription("Ibuprofen")
                .protocol("Drink water")
                .build();
    }

    @Nested
    @DisplayName("GET /api/diagnoses - Get All Diagnoses")
    class GetAllDiagnosesTests {

        @Test
        @DisplayName("Should return list of diagnoses when diagnoses exist")
        void getAllDiagnoses_whenDiagnosesExist_returnsList() throws Exception {
            when(diagnoseService.getAll()).thenReturn(List.of(diagnose, diagnose2));

            mockMvc.perform(get("/api/diagnoses"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].description").value(diagnose.getDescription()))
                    .andExpect(jsonPath("$[0].prescription").value(diagnose.getPrescription()))
                    .andExpect(jsonPath("$[0].protocol").value(diagnose.getProtocol()))
                    .andExpect(jsonPath("$[1].description").value(diagnose2.getDescription()))
                    .andExpect(jsonPath("$[1].prescription").value(diagnose2.getPrescription()))
                    .andExpect(jsonPath("$[1].protocol").value(diagnose2.getProtocol()));

            verify(diagnoseService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should return empty list when no diagnoses exist")
        void getAllDiagnoses_whenNoDiagnosesExist_returnsEmptyList() throws Exception {
            when(diagnoseService.getAll()).thenReturn(Collections.emptyList());

            mockMvc.perform(get("/api/diagnoses"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(diagnoseService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should handle service exception")
        void getAllDiagnoses_whenServiceThrowsException_returnsServerError() throws Exception {
            when(diagnoseService.getAll()).thenThrow(new RuntimeException("Database error"));

            mockMvc.perform(get("/api/diagnoses"))
                    .andExpect(status().isInternalServerError());

            verify(diagnoseService, times(1)).getAll();
        }
    }

    @Nested
    @DisplayName("GET /api/diagnoses/{id} - Get Diagnose by ID")
    class GetDiagnoseByIdTests {

        @Test
        @DisplayName("Should return diagnose when valid ID is provided")
        void getDiagnoseById_whenValidId_returnsDiagnose() throws Exception {
            when(diagnoseService.getById(diagnoseId)).thenReturn(diagnose);

            mockMvc.perform(get("/api/diagnoses/{id}", diagnoseId))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(diagnoseId.toString()))
                    .andExpect(jsonPath("$.description").value(diagnose.getDescription()))
                    .andExpect(jsonPath("$.prescription").value(diagnose.getPrescription()))
                    .andExpect(jsonPath("$.protocol").value(diagnose.getProtocol()));

            verify(diagnoseService, times(1)).getById(diagnoseId);
        }

        @Test
        @DisplayName("Should return 404 when diagnose not found")
        void getDiagnoseById_whenDiagnoseNotFound_returns404() throws Exception {
            when(diagnoseService.getById(diagnoseId)).thenThrow(new DiagnoseNotFoundException("Diagnose not found"));

            mockMvc.perform(get("/api/diagnoses/{id}", diagnoseId))
                    .andExpect(status().isNotFound());

            verify(diagnoseService, times(1)).getById(diagnoseId);
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getDiagnoseById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/diagnoses/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/diagnoses - Create Diagnose")
    class CreateDiagnoseTests {

        @Test
        @DisplayName("Should create diagnose with valid data")
        void createDiagnose_withValidData_returnsCreatedDiagnose() throws Exception {
            when(diagnoseService.create(any(DiagnoseCreateDto.class))).thenReturn(diagnose);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            DiagnoseCreateDto diagnoseCreateDto = diagnoseCreateDtoMapper.toDto(diagnose);

            mockMvc.perform(post("/api/diagnoses")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(diagnoseCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.description").value(diagnose.getDescription()))
                    .andExpect(jsonPath("$.prescription").value(diagnose.getPrescription()))
                    .andExpect(jsonPath("$.protocol").value(diagnose.getProtocol()));

            verify(diagnoseService, times(1)).create(any(DiagnoseCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createDiagnose_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/diagnoses")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).create(any());
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createDiagnose_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/diagnoses")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).create(any());
        }

        @Test
        @DisplayName("Should create diagnose with minimal required fields")
        void createDiagnose_withMinimalFields_returnsCreatedDiagnose() throws Exception {
            Diagnose minimalDiagnose = new Diagnose();
            minimalDiagnose.setMedicalRecord(medicalRecord);
            minimalDiagnose.setDescription("Simple headache");

            when(diagnoseService.create(any(DiagnoseCreateDto.class))).thenReturn(minimalDiagnose);
            when(medicalRecordRepository.findById(medicalRecord.getId())).thenReturn(Optional.of(medicalRecord));

            DiagnoseCreateDto diagnoseCreateDto = diagnoseCreateDtoMapper.toDto(minimalDiagnose);

            mockMvc.perform(post("/api/diagnoses")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(diagnoseCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value("Simple headache"))
                    .andExpect(jsonPath("$.prescription").doesNotExist())
                    .andExpect(jsonPath("$.protocol").doesNotExist());

            verify(diagnoseService, times(1)).create(any(DiagnoseCreateDto.class));
        }
    }

    @Nested
    @DisplayName("PATCH /api/diagnoses/{id} - Update Diagnose")
    class UpdateDiagnoseTests {

        @Test
        @DisplayName("Should update diagnose with valid data")
        void updateDiagnose_withValidData_returnsUpdatedDiagnose() throws Exception {
            Diagnose updatedDiagnose = new Diagnose(diagnoseId, diagnose.getCreatedAt(), LocalDateTime.now(),
                    diagnose.getMedicalRecord(), "Migraine", "Ibuprofen", "Resting");

            when(diagnoseService.update(eq(diagnoseId), any(DiagnoseUpdateDto.class))).thenReturn(updatedDiagnose);

            mockMvc.perform(patch("/api/diagnoses/{id}", diagnoseId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updatedDiagnose)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(diagnoseId.toString()))
                    .andExpect(jsonPath("$.description").value("Migraine"))
                    .andExpect(jsonPath("$.prescription").value("Ibuprofen"))
                    .andExpect(jsonPath("$.protocol").value("Resting"));

            verify(diagnoseService, times(1)).update(eq(diagnoseId), any(DiagnoseUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when updating non-existent diagnose")
        void updateDiagnose_whenDiagnoseNotFound_returns404() throws Exception {
            when(diagnoseService.update(eq(diagnoseId), any(DiagnoseUpdateDto.class)))
                    .thenThrow(new DiagnoseNotFoundException("Diagnose not found"));

            mockMvc.perform(patch("/api/diagnoses/{id}", diagnoseId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(diagnose)))
                    .andExpect(status().isNotFound());

            verify(diagnoseService, times(1)).update(eq(diagnoseId), any(DiagnoseUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void updateDiagnose_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(patch("/api/diagnoses/{id}", "invalid-uuid")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(diagnose)))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void updateDiagnose_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(patch("/api/diagnoses/{id}", diagnoseId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should update only provided fields")
        void updateDiagnose_withPartialData_returnsUpdatedDiagnose() throws Exception {
            Diagnose partialUpdate = new Diagnose();
            partialUpdate.setDescription("Updated description only");

            Diagnose updatedDiagnose = new Diagnose(diagnoseId, diagnose.getCreatedAt(), LocalDateTime.now(),
                    diagnose.getMedicalRecord(), "Updated description only", diagnose.getPrescription(), diagnose.getProtocol());

            when(diagnoseService.update(eq(diagnoseId), any(DiagnoseUpdateDto.class))).thenReturn(updatedDiagnose);

            mockMvc.perform(patch("/api/diagnoses/{id}", diagnoseId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(partialUpdate)))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.description").value("Updated description only"));

            verify(diagnoseService, times(1)).update(eq(diagnoseId), any(DiagnoseUpdateDto.class));
        }
    }

    @Nested
    @DisplayName("DELETE /api/diagnoses/{id} - Delete Diagnose")
    class DeleteDiagnoseTests {

        @Test
        @DisplayName("Should delete diagnose when it exists")
        void deleteDiagnose_whenExists_returnsNoContent() throws Exception {
            doNothing().when(diagnoseService).delete(diagnoseId);

            mockMvc.perform(delete("/api/diagnoses/{id}", diagnoseId))
                    .andExpect(status().isNoContent());

            verify(diagnoseService, times(1)).delete(diagnoseId);
        }

        @Test
        @DisplayName("Should return 404 when deleting non-existent diagnose")
        void deleteDiagnose_whenNotFound_returns404() throws Exception {
            doThrow(new DiagnoseNotFoundException("Diagnose not found"))
                    .when(diagnoseService).delete(diagnoseId);

            mockMvc.perform(delete("/api/diagnoses/{id}", diagnoseId))
                    .andExpect(status().isNotFound());

            verify(diagnoseService, times(1)).delete(diagnoseId);
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void deleteDiagnose_withInvalidUUID_returns400() throws Exception {
            mockMvc.perform(delete("/api/diagnoses/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(diagnoseService, never()).delete(any());
        }
    }

    @Nested
    @DisplayName("Edge Cases and Error Handling")
    class EdgeCasesTests {

        @Test
        @DisplayName("Should handle very long description")
        void createDiagnose_withLongDescription_shouldHandle() throws Exception {
            String longDescription = "A".repeat(1000);
            Diagnose longDiagnose = new Diagnose();
            longDiagnose.setMedicalRecord(medicalRecord);
            longDiagnose.setDescription(longDescription);
            longDiagnose.setPrescription("Standard treatment");
            longDiagnose.setProtocol("Standard protocol");

            when(diagnoseService.create(any(DiagnoseCreateDto.class))).thenReturn(longDiagnose);

            mockMvc.perform(post("/api/diagnoses")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(diagnoseCreateDtoMapper.toDto(longDiagnose))))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.description").value(longDescription));

            verify(diagnoseService, times(1)).create(any(DiagnoseCreateDto.class));
        }

        @Test
        @DisplayName("Should handle null values in update")
        void updateDiagnose_withNullValues_shouldHandle() throws Exception {
            String jsonWithNulls = """
                {
                    "description": null,
                    "prescription": "Updated prescription",
                    "protocol": "Updated protocol"
                }
                """;

            Diagnose updatedDiagnose = new Diagnose(diagnoseId, diagnose.getCreatedAt(), LocalDateTime.now(),
                    diagnose.getMedicalRecord(), null, "Updated prescription", "Updated protocol");

            when(diagnoseService.update(eq(diagnoseId), any(DiagnoseUpdateDto.class))).thenReturn(updatedDiagnose);

            mockMvc.perform(patch("/api/diagnoses/{id}", diagnoseId)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(jsonWithNulls))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.prescription").value("Updated prescription"))
                    .andExpect(jsonPath("$.protocol").value("Updated protocol"));

            verify(diagnoseService, times(1)).update(eq(diagnoseId), any(DiagnoseUpdateDto.class));
        }
    }
}
