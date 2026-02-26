package com.cmed.app.mappers.medicalRecords;

import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MedicalRecordListDtoMapper {
    MedicalRecordListDtoMapper INSTANCE = Mappers.getMapper(MedicalRecordListDtoMapper.class);

    @Mapping(source = "patient.id", target = "patientId")
    MedicalRecordListDto toDto(MedicalRecord medicalRecord);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "patient", ignore = true)
    @Mapping(target = "notes", ignore = true)
    @Mapping(target = "diagnoses", ignore = true)
    @Mapping(target = "files", ignore = true)
    MedicalRecord toEntity(MedicalRecordListDto dto);
}