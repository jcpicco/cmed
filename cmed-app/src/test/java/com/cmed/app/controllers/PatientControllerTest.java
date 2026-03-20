package com.cmed.app.controllers;

import com.cmed.app.dtos.patients.*;
import com.cmed.app.exceptions.PatientNotFoundException;
import com.cmed.app.mappers.patients.*;
import com.cmed.app.models.Patient;
import com.cmed.app.models.notes.PatientNote;
import com.cmed.app.repositories.PatientRepository;
import com.cmed.app.services.PatientService;
import com.cmed.app.services.MedicalRecordService;
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

@WebMvcTest(controllers = PatientController.class,
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("PatientController Tests")
class PatientControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private PatientService patientService;

    @MockitoBean
    private MedicalRecordService medicalRecordService;

    @MockitoBean
    private PreviousRecordService previousRecordService;

    @MockitoBean
    private PatientRepository patientRepository;

    private PatientDtoMapper patientDtoMapper;
    private PatientListDtoMapper patientListDtoMapper;
    private PatientCreateDtoMapper patientCreateDtoMapper;
    private PatientUpdateDtoMapper patientUpdateDtoMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private Patient patient;
    private Patient patient2;

    @BeforeEach
    void setUp() {
        patientDtoMapper = new PatientDtoMapperImpl();
        patientListDtoMapper = new PatientListDtoMapperImpl();
        patientCreateDtoMapper = new PatientCreateDtoMapperImpl();

        PatientNote note1 = PatientNote.builder()
                .id(UUID.randomUUID())
                .description("Test note")
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        patient = Patient.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .email("johndoe@example.com")
                .name("John")
                .lastName("Doe")
                .secondLastName("Smith")
                .phone("123456789")
                .dni("12345678A")
                .birthDate(LocalDate.of(1990, 1, 1))
                .allergies("Peanuts")
                .notes(List.of(note1))
                .build();

        note1.setPatient(patient);

        patient2 = Patient.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .deletedAt(null)
                .email("janedoe@example.com")
                .name("Jane")
                .lastName("Doe")
                .secondLastName("Johnson")
                .phone("987654321")
                .dni("98765432B")
                .birthDate(LocalDate.of(1992, 1, 1))
                .notes(new ArrayList<>())
                .build();
    }

    @Nested
    @DisplayName("GET /api/patients - Get All Patients")
    class GetAllPatientsTests {

        @Test
        @DisplayName("Should return list of patients when patients exist")
        void getAllPatients_whenPatientsExist_returnsList() throws Exception {
            when(patientService.getAll()).thenReturn(List.of(
                    patientListDtoMapper.toDto(patient),
                    patientListDtoMapper.toDto(patient2)
            ));

            mockMvc.perform(get("/api/patients"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(2)))
                    .andExpect(jsonPath("$[0].id").value(patient.getId().toString()))
                    .andExpect(jsonPath("$[0].email").value(patient.getEmail()))
                    .andExpect(jsonPath("$[0].name").value(patient.getName()))
                    .andExpect(jsonPath("$[0].lastName").value(patient.getLastName()))
                    .andExpect(jsonPath("$[0].secondLastName").value(patient.getSecondLastName()))
                    .andExpect(jsonPath("$[1].id").value(patient2.getId().toString()))
                    .andExpect(jsonPath("$[1].email").value(patient2.getEmail()))
                    .andExpect(jsonPath("$[1].name").value(patient2.getName()))
                    .andExpect(jsonPath("$[1].lastName").value(patient2.getLastName()))
                    .andExpect(jsonPath("$[1].secondLastName").value(patient2.getSecondLastName()));

            verify(patientService, times(1)).getAll();
        }

        @Test
        @DisplayName("Should return empty list when no patients exist")
        void getAllPatients_whenNoPatientExist_returnsEmpty() throws Exception {
            when(patientService.getAll()).thenReturn(List.of());

            mockMvc.perform(get("/api/patients"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$", hasSize(0)));

            verify(patientService, times(1)).getAll();
        }
    }

    @Nested
    @DisplayName("GET /api/patients/{id} - Get Patient by ID")
    class GetPatientByIdTests {

        @Test
        @DisplayName("Should return patient when valid ID is provided")
        void getPatientById_whenValidId_returnsPatient() throws Exception {
            when(patientService.getById(patient.getId())).thenReturn(patientDtoMapper.toDto(patient));

            mockMvc.perform(get("/api/patients/{id}", patient.getId()))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(patient.getId().toString()))
                    .andExpect(jsonPath("$.email").value(patient.getEmail()))
                    .andExpect(jsonPath("$.name").value(patient.getName()))
                    .andExpect(jsonPath("$.lastName").value(patient.getLastName()))
                    .andExpect(jsonPath("$.phone").value(patient.getPhone()))
                    .andExpect(jsonPath("$.dni").value(patient.getDni()))
                    .andExpect(jsonPath("$.birthDate").value(patient.getBirthDate().toString()))
                    .andExpect(jsonPath("$.allergies").value(patient.getAllergies()))
                    .andExpect(jsonPath("$.notes").isArray())
                    .andExpect(jsonPath("$.notes", hasSize(1)))
                    .andExpect(jsonPath("$.notes[0].description").value("Test note"));

            verify(patientService, times(1)).getById(patient.getId());
        }

        @Test
        @DisplayName("Should return 404 when patient not found")
        void getPatientById_whenPatientNotFound_returns404() throws Exception {
            when(patientService.getById(patient.getId())).thenThrow(new PatientNotFoundException("Patient not found"));

            mockMvc.perform(get("/api/patients/{id}", patient.getId()))
                    .andExpect(status().isNotFound());

            verify(patientService, times(1)).getById(patient.getId());
        }

        @Test
        @DisplayName("Should return 400 when invalid UUID format")
        void getPatientById_whenInvalidUUID_returns400() throws Exception {
            mockMvc.perform(get("/api/patients/{id}", "invalid-uuid"))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).getById(any());
        }
    }

    @Nested
    @DisplayName("POST /api/patients - Create Patient")
    class CreatePatientTests {

        @Test
        @DisplayName("Should create patient with valid data")
        void createPatient_withValidData_returnsCreatedPatient() throws Exception {
            PatientCreateDto patientCreateDto = PatientCreateDto.builder()
                    .email("johndoe@example.com")
                    .name("John")
                    .lastName("Doe")
                    .secondLastName("Smith")
                    .phone("123456789")
                    .dni("12345678A")
                    .birthDate(LocalDate.of(1990, 1, 1))
                    .allergies("Peanuts")
                    .build();

            when(patientService.create(any(PatientCreateDto.class))).thenReturn(patientDtoMapper.toDto(patient));

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(patientCreateDto)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.id").value(patient.getId().toString()))
                    .andExpect(jsonPath("$.email").value(patient.getEmail()))
                    .andExpect(jsonPath("$.name").value(patient.getName()))
                    .andExpect(jsonPath("$.lastName").value(patient.getLastName()))
                    .andExpect(jsonPath("$.phone").value(patient.getPhone()))
                    .andExpect(jsonPath("$.dni").value(patient.getDni()))
                    .andExpect(jsonPath("$.birthDate").value(patient.getBirthDate().toString()))
                    .andExpect(jsonPath("$.allergies").value(patient.getAllergies()));

            verify(patientService, times(1)).create(any(PatientCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void createPatient_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).create(any());
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void createPatient_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).create(any());
        }

        @Test
        @DisplayName("Should create patient with minimal required fields")
        void createPatient_withMinimalFields_returnsCreatedPatient() throws Exception {
            Patient minimalPatient = new Patient();
            minimalPatient.setEmail("minimal@example.com");
            minimalPatient.setName("Minimal");
            minimalPatient.setLastName("Patient");
            minimalPatient.setSecondLastName("Tester");
            minimalPatient.setPhone("123456789");
            minimalPatient.setDni("12345678A");
            minimalPatient.setBirthDate(LocalDate.of(1990, 1, 1));

            PatientCreateDto minimalDto = PatientCreateDto.builder()
                    .email(minimalPatient.getEmail())
                    .name(minimalPatient.getName())
                    .lastName(minimalPatient.getLastName())
                    .secondLastName(minimalPatient.getSecondLastName())
                    .phone(minimalPatient.getPhone())
                    .dni(minimalPatient.getDni())
                    .birthDate(minimalPatient.getBirthDate())
                    .build();

            when(patientService.create(any(PatientCreateDto.class))).thenReturn(patientDtoMapper.toDto(minimalPatient));

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(minimalDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.email").value("minimal@example.com"))
                    .andExpect(jsonPath("$.name").value("Minimal"))
                    .andExpect(jsonPath("$.lastName").value("Patient"))
                    .andExpect(jsonPath("$.secondLastName").value("Tester"));

            verify(patientService, times(1)).create(any(PatientCreateDto.class));
        }

        @Test
        @DisplayName("Should create patient without email")
        void createPatient_withoutEmail_returnsCreatedPatient() throws Exception {
            PatientCreateDto noEmailDto = PatientCreateDto.builder()
                    .name("John")
                    .lastName("Email")
                    .phone("123456789")
                    .dni("12345678C")
                    .birthDate(LocalDate.of(1990, 1, 1))
                    .build();

            Patient noEmailPatient = new Patient();
            noEmailPatient.setId(UUID.randomUUID());
            noEmailPatient.setName("John");
            noEmailPatient.setLastName("Email");
            noEmailPatient.setPhone("123456789");
            noEmailPatient.setDni("12345678C");
            noEmailPatient.setBirthDate(LocalDate.of(1990, 1, 1));

            when(patientService.create(any(PatientCreateDto.class))).thenReturn(patientDtoMapper.toDto(noEmailPatient));

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(noEmailDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.email").doesNotExist())
                    .andExpect(jsonPath("$.name").value("John"));

            verify(patientService, times(1)).create(any(PatientCreateDto.class));
        }

        @Test
        @DisplayName("Should create patient without DNI")
        void createPatient_withoutDni_returnsCreatedPatient() throws Exception {
            PatientCreateDto noDniDto = PatientCreateDto.builder()
                    .name("Jane")
                    .lastName("Doe")
                    .phone("123456789")
                    .birthDate(LocalDate.of(1990, 1, 1))
                    .build();

            Patient noDniPatient = new Patient();
            noDniPatient.setId(UUID.randomUUID());
            noDniPatient.setName("Jane");
            noDniPatient.setLastName("Doe");
            noDniPatient.setPhone("123456789");
            noDniPatient.setBirthDate(LocalDate.of(1990, 1, 1));

            when(patientService.create(any(PatientCreateDto.class))).thenReturn(patientDtoMapper.toDto(noDniPatient));

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(noDniDto)))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.dni").doesNotExist())
                    .andExpect(jsonPath("$.name").value("Jane"));

            verify(patientService, times(1)).create(any(PatientCreateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when phone has less than 3 characters")
        void createPatient_withShortPhone_returns400() throws Exception {
            PatientCreateDto invalidDto = PatientCreateDto.builder()
                    .email("test@example.com")
                    .name("Test")
                    .lastName("User")
                    .phone("12")
                    .dni("12345678A")
                    .birthDate(LocalDate.of(1990, 1, 1))
                    .build();

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(invalidDto)))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).create(any());
        }

        @Test
        @DisplayName("Should return 400 when phone has more than 20 characters")
        void createPatient_withTooLongPhone_returns400() throws Exception {
            PatientCreateDto invalidDto = PatientCreateDto.builder()
                    .email("test@example.com")
                    .name("Test")
                    .lastName("User")
                    .phone("123456789012345678901")
                    .dni("12345678A")
                    .birthDate(LocalDate.of(1990, 1, 1))
                    .build();

            mockMvc.perform(post("/api/patients")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(invalidDto)))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).create(any());
        }
    }

    @Nested
    @DisplayName("PATCH /api/patients/{id} - Update Patient")
    class UpdatePatientTests {

        @Test
        @DisplayName("Should update patient with valid data")
        void updatePatient_withValidData_returnsUpdatedPatient() throws Exception {
            Patient updatedPatient = patient.toBuilder()
                    .email("updated@example.com")
                    .name("Updated")
                    .lastName("Name")
                    .secondLastName("NewSecond")
                    .phone("987654321")
                    .birthDate(LocalDate.of(1995, 1, 1))
                    .allergies("Shellfish")
                    .build();

            PatientUpdateDto updateDto = PatientUpdateDto.builder()
                    .email(updatedPatient.getEmail())
                    .name(updatedPatient.getName())
                    .lastName(updatedPatient.getLastName())
                    .secondLastName(updatedPatient.getSecondLastName())
                    .phone(updatedPatient.getPhone())
                    .birthDate(updatedPatient.getBirthDate())
                    .allergies(updatedPatient.getAllergies())
                    .build();

            when(patientService.update(eq(patient.getId()), any(PatientUpdateDto.class)))
                    .thenReturn(patientDtoMapper.toDto(updatedPatient));

            mockMvc.perform(patch("/api/patients/{id}", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.email").value(updatedPatient.getEmail()))
                    .andExpect(jsonPath("$.name").value(updatedPatient.getName()))
                    .andExpect(jsonPath("$.lastName").value(updatedPatient.getLastName()))
                    .andExpect(jsonPath("$.secondLastName").value(updatedPatient.getSecondLastName()))
                    .andExpect(jsonPath("$.phone").value(updatedPatient.getPhone()))
                    .andExpect(jsonPath("$.birthDate").value(updatedPatient.getBirthDate().toString()))
                    .andExpect(jsonPath("$.allergies").value(updatedPatient.getAllergies()));

            verify(patientService, times(1)).update(eq(patient.getId()), any(PatientUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 404 when patient not found")
        void updatePatient_whenPatientNotFound_returns404() throws Exception {
            PatientUpdateDto updateDto = PatientUpdateDto.builder()
                    .email("updated@example.com")
                    .build();

            when(patientService.update(eq(patient.getId()), any(PatientUpdateDto.class)))
                    .thenThrow(new PatientNotFoundException("Patient not found"));

            mockMvc.perform(patch("/api/patients/{id}", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isNotFound());

            verify(patientService, times(1)).update(eq(patient.getId()), any(PatientUpdateDto.class));
        }

        @Test
        @DisplayName("Should return 400 when request body is empty")
        void updatePatient_withEmptyBody_returns400() throws Exception {
            mockMvc.perform(patch("/api/patients/{id}", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(""))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should return 400 when JSON is malformed")
        void updatePatient_withMalformedJson_returns400() throws Exception {
            mockMvc.perform(patch("/api/patients/{id}", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{ invalid json"))
                    .andExpect(status().isBadRequest());

            verify(patientService, never()).update(any(), any());
        }

        @Test
        @DisplayName("Should accept null values in update")
        void updatePatient_withNullValues_accepts() throws Exception {
            PatientUpdateDto updateDto = PatientUpdateDto.builder()
                    .email("updated@example.com")
                    .name(null)
                    .lastName(null)
                    .secondLastName(null)
                    .phone(null)
                    .dni(null)
                    .birthDate(null)
                    .build();

            Patient updatedPatient = Patient.builder()
                    .id(patient.getId())
                    .createdAt(patient.getCreatedAt())
                    .updatedAt(LocalDateTime.now())
                    .deletedAt(null)
                    .email(updateDto.getEmail())
                    .name(patient.getName())
                    .lastName(patient.getLastName())
                    .secondLastName(patient.getSecondLastName())
                    .phone(patient.getPhone())
                    .dni(patient.getDni())
                    .birthDate(patient.getBirthDate())
                    .build();

            when(patientService.update(eq(patient.getId()), any(PatientUpdateDto.class)))
                    .thenReturn(patientDtoMapper.toDto(updatedPatient));

            mockMvc.perform(patch("/api/patients/{id}", patient.getId())
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(updateDto)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.email").value(updateDto.getEmail()))
                    .andExpect(jsonPath("$.name").value(patient.getName()))
                    .andExpect(jsonPath("$.lastName").value(patient.getLastName()))
                    .andExpect(jsonPath("$.phone").value(patient.getPhone()))
                    .andExpect(jsonPath("$.dni").value(patient.getDni()))
                    .andExpect(jsonPath("$.birthDate").value(patient.getBirthDate().toString()));

            verify(patientService, times(1)).update(eq(patient.getId()), any(PatientUpdateDto.class));
        }
    }

    @Nested
    @DisplayName("DELETE /api/patients/{id} - Delete Patient")
    class DeletePatientTests {

        @Test
        @DisplayName("Should delete patient when exists")
        void deletePatient_whenExists_returnsNoContent() throws Exception {
            doNothing().when(patientService).delete(patient.getId());

            mockMvc.perform(delete("/api/patients/{id}", patient.getId()))
                    .andExpect(status().isNoContent());

            verify(patientService, times(1)).delete(patient.getId());
        }

        @Test
        @DisplayName("Should return 404 when patient not found")
        void deletePatient_whenNotFound_returns404() throws Exception {
            doThrow(new PatientNotFoundException("Patient not found"))
                    .when(patientService).delete(patient.getId());

            mockMvc.perform(delete("/api/patients/{id}", patient.getId()))
                    .andExpect(status().isNotFound());

            verify(patientService, times(1)).delete(patient.getId());
        }
    }
}
