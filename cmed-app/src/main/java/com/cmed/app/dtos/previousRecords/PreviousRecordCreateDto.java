package com.cmed.app.dtos.previousRecords;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.hibernate.validator.constraints.UUID;

@Data
@Builder
public class PreviousRecordCreateDto {

    @NotNull
    @UUID
    String patientId;

    @NotBlank
    @Size(min = 5, max = 10000)
    String description;
}

