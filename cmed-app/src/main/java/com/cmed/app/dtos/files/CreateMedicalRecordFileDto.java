package com.cmed.app.dtos.files;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.UUID;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
public class CreateMedicalRecordFileDto {
    @NotNull(message = "File is required")
    @NotEmpty(message = "File cannot be empty")
    private MultipartFile file;

    @NotNull
    @UUID
    private String medicalRecordId;
}
