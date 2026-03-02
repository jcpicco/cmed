package com.cmed.app.dtos.medicalRecords;

import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MedicalRecordUpdateDto {

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

