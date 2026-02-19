package com.cmed.app.dtos.previousRecords;

import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PreviousRecordUpdateDto {

    @Size(min = 5, max = 10000)
    String description;
}

