package com.cmed.app.dtos.files;

import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.UUID;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
public class CreatePreviousRecordFileDto {
    @NotNull
    private MultipartFile file;

    @NotNull
    @UUID
    private String previousRecordId;
}
