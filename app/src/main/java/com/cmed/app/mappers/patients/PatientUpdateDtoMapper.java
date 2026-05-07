package com.medcentermanager.app.mappers.patients;

import com.medcentermanager.app.dtos.patients.PatientUpdateDto;
import com.medcentermanager.app.models.Patient;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PatientUpdateDtoMapper {
    PatientUpdateDto toDto(Patient patient);
}
