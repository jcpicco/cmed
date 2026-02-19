package com.cmed.app.controllers.files;

import com.cmed.app.dtos.files.PreviousRecordFileDto;
import com.cmed.app.exceptions.PreviousRecordFileNotFoundException;
import com.cmed.app.models.files.PreviousRecordFile;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.services.files.PreviousRecordFileService;
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

@WebMvcTest(controllers = {PreviousRecordFileController.class, FileExceptionHandler.class},
        excludeAutoConfiguration = SecurityAutoConfiguration.class)
@DisplayName("PreviousRecordFileController Tests")
class PreviousRecordFileControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private PreviousRecordFileService previousRecordFileService;

    private PreviousRecord previousRecord;
    private PreviousRecordFile previousRecordFile;
    private PreviousRecordFileDto fileDto;
    private UUID fileId;
    private LocalDateTime now;
    private MockMultipartFile mockFile;

    @BeforeEach
    void setUp() {
        fileId = UUID.randomUUID();
        now = LocalDateTime.now();

        previousRecord = new PreviousRecord();
        previousRecord.setId(UUID.randomUUID());
        previousRecord.setCreatedAt(now);
        previousRecord.setUpdatedAt(now);

        previousRecordFile = new PreviousRecordFile();
        previousRecordFile.setId(fileId);
        previousRecordFile.setCreatedAt(now);
        previousRecordFile.setUpdatedAt(now);
        previousRecordFile.setPreviousRecord(previousRecord);
        previousRecordFile.setFileName("previous.pdf");
        previousRecordFile.setOriginalName("previous.pdf");
        previousRecordFile.setFileSize(1024L);
        previousRecordFile.setFileExtension("pdf");

        mockFile = new MockMultipartFile(
            "file",
            "previous.pdf",
            "application/pdf",
            "test content".getBytes()
        );

        fileDto = new PreviousRecordFileDto(
            fileId,
            now,
            now,
            previousRecord.getId(),
            previousRecordFile.getFileName(),
            previousRecordFile.getOriginalName(),
            previousRecordFile.getFileExtension(),
            previousRecordFile.getFileSize(),
            null
        );
    }

    @Nested
    @DisplayName("GET /api/previousRecords/{previousRecordId}/files")
    class GetAllFilesTests {
        @Test
        @DisplayName("Should return list of files when files exist")
        void shouldReturnListOfFiles() throws Exception {
            when(previousRecordFileService.getAllByPreviousRecordId(any(UUID.class)))
                    .thenReturn(List.of(fileDto));

            mockMvc.perform(get("/api/previousRecords/{previousRecordId}/files", previousRecord.getId())
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$", hasSize(1)))
                    .andExpect(jsonPath("$[0].id").value(fileDto.id().toString()))
                    .andExpect(jsonPath("$[0].fileName").value(fileDto.fileName()));

            verify(previousRecordFileService).getAllByPreviousRecordId(previousRecord.getId());
        }
    }

    @Nested
    @DisplayName("POST /api/previousRecords/{previousRecordId}/files")
    class CreateFileTests {
        @Test
        @DisplayName("Should create file when data is valid")
        void shouldCreateFile() throws Exception {
            when(previousRecordFileService.create(any()))
                    .thenReturn(fileDto);

            mockMvc.perform(multipart("/api/previousRecords/{previousRecordId}/files", previousRecord.getId())
                            .file(mockFile)
                            .contentType(MediaType.MULTIPART_FORM_DATA))
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.id").value(fileDto.id().toString()))
                    .andExpect(jsonPath("$.fileName").value(fileDto.fileName()));

            verify(previousRecordFileService).create(any());
        }

        @Test
        @DisplayName("Should return bad request when file is missing")
        void shouldReturnBadRequestWhenFileIsMissing() throws Exception {
            mockMvc.perform(multipart("/api/previousRecords/{previousRecordId}/files", previousRecord.getId())
                            .contentType(MediaType.MULTIPART_FORM_DATA))
                    .andExpect(status().isBadRequest());

            verify(previousRecordFileService, never()).create(any());
        }
    }

    @Nested
    @DisplayName("DELETE /api/previousRecords/{previousRecordId}/files/{fileId}")
    class DeleteFileTests {
        @Test
        @DisplayName("Should delete file when file exists")
        void shouldDeleteFile() throws Exception {
            doNothing().when(previousRecordFileService).delete(any(UUID.class));

            mockMvc.perform(delete("/api/previousRecords/{previousRecordId}/files/{fileId}",
                            previousRecord.getId(), fileId))
                    .andExpect(status().isNoContent());

            verify(previousRecordFileService).delete(fileId);
        }

        @Test
        @DisplayName("Should return not found when file doesn't exist")
        void shouldReturnNotFoundWhenFileDoesntExist() throws Exception {
            UUID nonExistentFileId = UUID.randomUUID();
            doThrow(new PreviousRecordFileNotFoundException("File not found"))
                    .when(previousRecordFileService).delete(nonExistentFileId);

            mockMvc.perform(delete("/api/previousRecords/{previousRecordId}/files/{fileId}",
                            previousRecord.getId(), nonExistentFileId))
                    .andExpect(status().isNotFound());

            verify(previousRecordFileService).delete(nonExistentFileId);
        }
    }
}
