package com.cmed.app.mappers.patients;

import com.cmed.app.dtos.patients.PatientListDto;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PatientListDtoMapper {
    PatientListDtoMapper INSTANCE = Mappers.getMapper(PatientListDtoMapper.class);
    PatientListDto toDto(Patient patient);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "phone", ignore = true)
    @Mapping(target = "birthDate", ignore = true)
    @Mapping(target = "notes", ignore = true)
    Patient toEntity(PatientListDto dto);
}