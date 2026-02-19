package com.cmed.app.controllers.files;

import com.cmed.app.dtos.files.PreviousRecordFileDto;
import com.cmed.app.dtos.files.CreatePreviousRecordFileDto;
import com.cmed.app.services.files.PreviousRecordFileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/previousRecords/{previousRecordId}/files")
@RequiredArgsConstructor
public class PreviousRecordFileController {
    private final PreviousRecordFileService previousRecordFileService;

    @GetMapping
    public ResponseEntity<List<PreviousRecordFileDto>> getAllFiles(@PathVariable UUID previousRecordId) {
        return ResponseEntity.ok(previousRecordFileService.getAllByPreviousRecordId(previousRecordId));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<PreviousRecordFileDto> createFile(
            @PathVariable UUID previousRecordId,
            @RequestParam("file") @Valid MultipartFile file) {
        CreatePreviousRecordFileDto createDto = CreatePreviousRecordFileDto.builder()
            .file(file)
            .previousRecordId(previousRecordId.toString())
            .build();
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(previousRecordFileService.create(createDto));
    }

    @GetMapping("/{fileId}/content")
    public ResponseEntity<Resource> downloadFile(
            @PathVariable UUID previousRecordId,
            @PathVariable UUID fileId) {
        byte[] fileContent = previousRecordFileService.getFileContent(fileId);
        PreviousRecordFileDto fileDto = previousRecordFileService.getFileById(fileId);

        ByteArrayResource resource = new ByteArrayResource(fileContent);

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileDto.originalName() + "\"")
            .header(HttpHeaders.CONTENT_TYPE, getContentType(fileDto.fileExtension()))
            .header(HttpHeaders.CONTENT_LENGTH, String.valueOf(fileContent.length))
            .body(resource);
    }

    @DeleteMapping("/{fileId}")
    public ResponseEntity<Void> deleteFile(
            @PathVariable UUID previousRecordId,
            @PathVariable UUID fileId) {
        previousRecordFileService.delete(fileId);
        return ResponseEntity.noContent().build();
    }

    private String getContentType(String fileExtension) {
        return switch (fileExtension.toLowerCase()) {
            case "pdf" -> MediaType.APPLICATION_PDF_VALUE;
            case "doc", "docx" -> "application/msword";
            case "xls", "xlsx" -> "application/vnd.ms-excel";
            case "ppt", "pptx" -> "application/vnd.ms-powerpoint";
            case "txt" -> MediaType.TEXT_PLAIN_VALUE;
            case "jpg", "jpeg" -> MediaType.IMAGE_JPEG_VALUE;
            case "png" -> MediaType.IMAGE_PNG_VALUE;
            case "gif" -> MediaType.IMAGE_GIF_VALUE;
            case "mp4" -> "video/mp4";
            case "webm" -> "video/webm";
            case "avi" -> "video/x-msvideo";
            case "mov" -> "video/quicktime";
            case "zip" -> "application/zip";
            default -> MediaType.APPLICATION_OCTET_STREAM_VALUE;
        };
    }
}
