package com.cmed.app.mappers.patients;

import com.cmed.app.dtos.patients.PatientCreateDto;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PatientCreateDtoMapper {

    PatientCreateDto toDto(Patient patient);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "notes", ignore = true)
    Patient toEntity(PatientCreateDto dto);
}