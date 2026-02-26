package com.cmed.app.dtos.patients;

import com.cmed.app.models.notes.PatientNote;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record PatientDto(
        UUID id,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        String email,
        String name,
        String lastName,
        String phone,
        String dni,
        LocalDate birthDate,
        String allergies,
        List<PatientNote> notes
) {}
