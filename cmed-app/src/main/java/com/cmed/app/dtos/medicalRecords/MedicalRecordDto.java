package com.cmed.app.dtos.medicalRecords;

import com.cmed.app.models.Note;
import com.cmed.app.models.Tracing;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record MedicalRecordDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        UUID patientId,
        String description,
        String background,
        String diagnose,
        String protocol,
        String prescription,
        List<Note> notes,
        List<Tracing> tracings
) {}
