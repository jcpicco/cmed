package com.cmed.app.controllers.files;

import com.cmed.app.dtos.files.MedicalRecordFileDto;
import com.cmed.app.exceptions.MedicalRecordFileNotFoundException;
import com.cmed.app.models.files.MedicalRecordFile;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.services.files.MedicalRecordFileService;
import com.cmed.app.handlers.FileExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.*;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = {MedicalRecordFileController.class, FileExceptionHandler.class},
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("MedicalRecordFileController Tests")
class MedicalRecordFileControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private MedicalRecordFileService medicalRecordFileService;

    private MedicalRecord medicalRecord;
    private MedicalRecordFile medicalRecordFile;
    private MedicalRecordFileDto fileDto;
    private UUID fileId;
    private LocalDateTime now;
    private MockMultipartFile mockFile;

    @BeforeEach
    void setUp() {
        fileId = UUID.randomUUID();
        now = LocalDateTime.now();

        medicalRecord = new MedicalRecord();
        medicalRecord.setId(UUID.randomUUID());
        medicalRecord.setCreatedAt(now);
        medicalRecord.setUpdatedAt(now);

        medicalRecordFile = new MedicalRecordFile();
        medicalRecordFile.setId(fileId);
        medicalRecordFile.setCreatedAt(now);
        medicalRecordFile.setUpdatedAt(now);
        medicalRecordFile.setMedicalRecord(medicalRecord);
        medicalRecordFile.setFileName("test.pdf");
        medicalRecordFile.setOriginalName("test.pdf");
        medicalRecordFile.setFileSize(1024L);
        medicalRecordFile.setFileExtension("pdf");

        mockFile = new MockMultipartFile(
            "file",
            "test.pdf",
            "application/pdf",
            "test content".getBytes()
        );

        fileDto = new MedicalRecordFileDto(
            fileId,
            now,
            now,
            medicalRecordFile.getFileName(),
            medicalRecordFile.getOriginalName(),
            medicalRecordFile.getFileExtension(),
            medicalRecordFile.getFileSize(),
            null,
            medicalRecord.getId()
        );
    }

    @Nested
    @DisplayName("GET /api/medicalRecords/{medicalRecordId}/files")
    class GetAllFilesTests {
        @Test
        @DisplayName("Should return list of files when files exist")
        void shouldReturnListOfFiles() throws Exception {
            when(medicalRecordFileService.getAllByMedicalRecordId(any(UUID.class)))
                    .thenReturn(List.of(fileDto));

            mockMvc.perform(get("/api/medicalRecords/{medicalRecordId}/files", medicalRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$", hasSize(1)))
                    .andExpect(jsonPath("$[0].id").value(fileDto.id().toString()))
                    .andExpect(jsonPath("$[0].fileName").value(fileDto.fileName()));

            verify(medicalRecordFileService).getAllByMedicalRecordId(medicalRecord.getId());
        }
    }

    @Nested
    @DisplayName("POST /api/medicalRecords/{medicalRecordId}/files")
    class CreateFileTests {
        @Test
        @DisplayName("Should create file when data is valid")
        void shouldCreateFile() throws Exception {
            when(medicalRecordFileService.create(any()))
                    .thenReturn(fileDto);

            mockMvc.perform(multipart("/api/medicalRecords/{medicalRecordId}/files", medicalRecord.getId())
                            .file(mockFile)
                            .contentType(MediaType.MULTIPART_FORM_DATA))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.id").value(fileDto.id().toString()))
                    .andExpect(jsonPath("$.fileName").value(fileDto.fileName()));

            verify(medicalRecordFileService).create(any());
        }

        @Test
        @DisplayName("Should return bad request when file is missing")
        void shouldReturnBadRequestWhenFileIsMissing() throws Exception {
            mockMvc.perform(multipart("/api/medicalRecords/{medicalRecordId}/files", medicalRecord.getId())
                            .contentType(MediaType.MULTIPART_FORM_DATA))
                    .andExpect(status().isBadRequest());

            verify(medicalRecordFileService, never()).create(any());
        }
    }

    @Nested
    @DisplayName("DELETE /api/medicalRecords/{medicalRecordId}/files/{fileId}")
    class DeleteFileTests {
        @Test
        @DisplayName("Should delete file when file exists")
        void shouldDeleteFile() throws Exception {
            doNothing().when(medicalRecordFileService).delete(any(UUID.class));

            mockMvc.perform(delete("/api/medicalRecords/{medicalRecordId}/files/{fileId}",
                            medicalRecord.getId(), fileId))
                    .andExpect(status().isNoContent());

            verify(medicalRecordFileService).delete(fileId);
        }

        @Test
        @DisplayName("Should return not found when file doesn't exist")
        void shouldReturnNotFoundWhenFileDoesntExist() throws Exception {
            UUID nonExistentFileId = UUID.randomUUID();
            doThrow(new MedicalRecordFileNotFoundException("File not found"))
                    .when(medicalRecordFileService).delete(nonExistentFileId);

            mockMvc.perform(delete("/api/medicalRecords/{medicalRecordId}/files/{fileId}",
                            medicalRecord.getId(), nonExistentFileId))
                    .andExpect(status().isNotFound());

            verify(medicalRecordFileService).delete(nonExistentFileId);
        }
    }
}
