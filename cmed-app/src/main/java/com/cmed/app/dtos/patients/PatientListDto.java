package com.cmed.app.dtos.patients;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

public record PatientListDto(
        UUID id,
        String name,
        String lastName,
        String dni,
        String email,
        LocalDate birthDate,
        LocalDateTime createdAt
) {}
