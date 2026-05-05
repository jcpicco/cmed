package com.medcentermanager.app.mappers.medicalRecords;

import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.medcentermanager.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface MedicalRecordUpdateDtoMapper {
    MedicalRecordUpdateDto toDto(MedicalRecord medicalRecord);
}