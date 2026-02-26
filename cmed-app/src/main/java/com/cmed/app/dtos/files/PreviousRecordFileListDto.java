package com.cmed.app.dtos.files;

import java.time.LocalDateTime;
import java.util.UUID;

public record PreviousRecordFileListDto(
        UUID id,
        LocalDateTime createdAt,
        String fileName,
        String originalName,
        UUID previousRecordId
) {}
