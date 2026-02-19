package com.cmed.app.dtos.patients;

import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class PatientCreateDto {

    @NotBlank
    @Email
    @Size(min = 3, max = 100)
    String email;

    @NotBlank
    @Size(min = 3, max = 50)
    String name;

    @NotBlank
    @Size(min = 3, max = 50)
    String lastName;

    @NotBlank
    @Size(min = 3, max = 20)
    String phone;

    @NotBlank
    @Size(min = 3, max = 20)
    String dni;

    @NotNull
    @Past
    LocalDate birthDate;

    @Size(max = 255)
    String allergies;
}
