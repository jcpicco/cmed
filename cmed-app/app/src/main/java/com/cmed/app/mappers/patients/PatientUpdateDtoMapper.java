package com.cmed.app.mappers.patients;

import com.cmed.app.dtos.patients.PatientUpdateDto;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PatientUpdateDtoMapper {
    PatientUpdateDto toDto(Patient patient);
}
