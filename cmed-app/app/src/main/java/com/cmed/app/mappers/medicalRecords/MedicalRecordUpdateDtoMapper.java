package com.cmed.app.mappers.medicalRecords;

import com.cmed.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.cmed.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface MedicalRecordUpdateDtoMapper {
    MedicalRecordUpdateDto toDto(MedicalRecord medicalRecord);
}