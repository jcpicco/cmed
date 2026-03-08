package com.cmed.app.dtos.patients;

import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class PatientUpdateDto {
    @Email
    @Size(max = 100)
    String email;

    @Size(min = 3, max = 50)
    String name;

    @Size(min = 3, max = 50)
    String lastName;

    @Size(min = 3, max = 20)
    String phone;

    @Size(max = 20)
    String dni;

    @Past
    LocalDate birthDate;

    @Size(max = 255)
    String allergies;
}
