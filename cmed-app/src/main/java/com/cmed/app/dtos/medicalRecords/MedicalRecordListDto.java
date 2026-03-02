package com.cmed.app.dtos.medicalRecords;

import java.time.LocalDateTime;
import java.util.UUID;

public record MedicalRecordListDto(
        UUID id,
        LocalDateTime createdAt,
        UUID patientId,
        String description,
        String background,
        String diagnose,
        String protocol,
        String prescription
) {}
