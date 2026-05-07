package com.medcentermanager.app.dtos.patients;

import com.medcentermanager.app.models.notes.PatientNote;

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
        String secondLastName,
        String phone,
        String dni,
        LocalDate birthDate,
        String allergies,
        List<PatientNote> notes
) {}
