package com.cmed.app.mappers.files;

import com.cmed.app.dtos.files.MedicalRecordFileListDto;
import com.cmed.app.models.files.MedicalRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MedicalRecordFileListDtoMapper {
    MedicalRecordFileListDtoMapper INSTANCE = Mappers.getMapper(MedicalRecordFileListDtoMapper.class);

    @Mapping(source = "medicalRecord.id", target = "medicalRecordId")
    MedicalRecordFileListDto toDto(MedicalRecordFile medicalRecordFile);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "medicalRecord", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    MedicalRecordFile toEntity(MedicalRecordFileListDto dto);
}
