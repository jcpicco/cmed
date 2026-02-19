package com.cmed.app.mappers.diagnoses;

import com.cmed.app.dtos.diagnoses.DiagnoseUpdateDto;
import com.cmed.app.models.Diagnose;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DiagnoseUpdateDtoMapper {
    DiagnoseUpdateDto toDto(Diagnose diagnose);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "medicalRecord", ignore = true)
    void updateEntityFromDto(DiagnoseUpdateDto dto, @MappingTarget Diagnose diagnose);
}