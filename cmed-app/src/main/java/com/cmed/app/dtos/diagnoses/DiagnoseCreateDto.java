package com.cmed.app.dtos.diagnoses;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.UUID;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DiagnoseCreateDto {

    @NotNull
    @UUID
    String medicalRecordId;

    @NotBlank
    @Size(min = 5, max = 10000)
    String description;

    @Size(max = 10000)
    String prescription;

    @Size(max = 10000)
    String protocol;
}

