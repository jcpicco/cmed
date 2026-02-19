package com.cmed.app.dtos.medicalRecords;

import com.cmed.app.models.Diagnose;
import com.cmed.app.models.Note;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record MedicalRecordDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        UUID patientId,
        String description,
        List<Note> notes,
        List<Diagnose> diagnoses
) {}
