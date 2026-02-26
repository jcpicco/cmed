package com.cmed.app.dtos.previousRecords;

import java.time.LocalDateTime;
import java.util.UUID;

public record PreviousRecordListDto(
        UUID id,
        LocalDateTime createdAt,
        UUID patientId,
        String description
) {}
