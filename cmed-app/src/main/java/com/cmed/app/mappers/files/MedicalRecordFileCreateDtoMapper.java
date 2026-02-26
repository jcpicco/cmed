package com.cmed.app.mappers.files;

import com.cmed.app.dtos.files.CreateMedicalRecordFileDto;
import com.cmed.app.models.files.MedicalRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MedicalRecordFileCreateDtoMapper {
    MedicalRecordFileCreateDtoMapper INSTANCE = Mappers.getMapper(MedicalRecordFileCreateDtoMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "fileName", ignore = true)
    @Mapping(target = "originalName", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "medicalRecord", ignore = true)
    MedicalRecordFile toEntity(CreateMedicalRecordFileDto dto);
}
