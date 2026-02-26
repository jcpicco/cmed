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

    @Size(min = 5, max = 10000)
    String description;

    @Size(max = 10000)
    String prescription;

    @Size(max = 10000)
    String protocol;
}

