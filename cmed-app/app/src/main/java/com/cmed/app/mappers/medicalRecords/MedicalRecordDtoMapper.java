package com.cmed.app.mappers.medicalRecords;

import com.cmed.app.dtos.medicalRecords.MedicalRecordDto;
import com.cmed.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MedicalRecordDtoMapper {
    MedicalRecordDtoMapper INSTANCE = Mappers.getMapper(MedicalRecordDtoMapper.class);

    @Mapping(source = "patient.id", target = "patientId")
    MedicalRecordDto toDto(MedicalRecord medicalRecord);

    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "patient", ignore = true)
    @Mapping(target = "files", ignore = true)
    @Mapping(target = "notes", ignore = true)
    MedicalRecord toEntity(MedicalRecordDto dto);
}