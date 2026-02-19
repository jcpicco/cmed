package com.cmed.app.dtos.diagnoses;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.hibernate.validator.constraints.UUID;

@Data
@Builder
public class DiagnoseUpdateDto {

    @Size(min = 5, max = 1000)
    String description;

    @Size(min = 5, max = 255)
    String prescription;

    @Size(min = 5, max = 1000)
    String protocol;
}

