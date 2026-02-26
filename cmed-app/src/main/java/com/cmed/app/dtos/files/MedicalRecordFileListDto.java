package com.cmed.app.dtos.files;

import java.time.LocalDateTime;
import java.util.UUID;

public record MedicalRecordFileListDto(
        UUID id,
        LocalDateTime createdAt,
        String fileName,
        String originalName,
        UUID medicalRecordId
) {}
