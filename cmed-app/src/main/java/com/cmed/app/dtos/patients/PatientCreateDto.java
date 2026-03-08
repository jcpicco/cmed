package com.cmed.app.dtos.patients;

import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class PatientCreateDto {

    @Email
    @Size(max = 100)
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

    @Size(max = 20)
    String dni;

    @NotNull
    @Past
    LocalDate birthDate;

    @Size(max = 255)
    String allergies;
}
