package com.cmed.app.dtos.previousRecords;

import com.cmed.app.models.Diagnose;
import com.cmed.app.models.Note;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record PreviousRecordDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        UUID patientId,
        String description
) {}
