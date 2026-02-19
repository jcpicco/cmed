package com.cmed.app.dtos.files;

import com.cmed.app.enums.FileCategory;

import java.time.LocalDateTime;
import java.util.UUID;

public record MedicalRecordFileDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        String fileName,
        String originalName,
        String fileExtension,
        Long fileSize,
        FileCategory category,
        UUID medicalRecordId
) {}
