package com.cmed.app.dtos.files;

import java.time.LocalDateTime;
import java.util.UUID;
import com.cmed.app.enums.FileCategory;

public record PreviousRecordFileDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        UUID previousRecordId,
        String fileName,
        String originalName,
        String fileExtension,
        Long fileSize,
        FileCategory category
) {}
