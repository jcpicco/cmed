package com.cmed.app.dtos.notes;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class PatientNoteCreateDto {



    @NotBlank
    @Size(min = 5, max = 10000)
    String description;
}
