package com.cmed.app.mappers.patients;

import com.cmed.app.dtos.patients.PatientDto;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PatientDtoMapper {
    PatientDtoMapper INSTANCE = Mappers.getMapper(PatientDtoMapper.class);

    PatientDto toDto(Patient patient);

    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "notes", ignore = true)
    Patient toEntity(PatientDto dto);
}