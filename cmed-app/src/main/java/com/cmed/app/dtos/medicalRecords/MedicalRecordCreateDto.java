package com.cmed.app.dtos.medicalRecords;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.UUID;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MedicalRecordCreateDto {

    @NotNull
    @UUID
    String patientId;

    @NotBlank
    @Size(min = 5, max = 10000)
    String description;

    @Size(max = 10000)
    String background;

    @Size(max = 1000)
    String diagnose;

    @Size(max = 1000)
    String protocol;

    @Size(max = 1000)
    String prescription;
}

