package com.cmed.app.mappers.notes;

import com.cmed.app.dtos.notes.PatientNoteCreateDto;
import com.cmed.app.models.notes.PatientNote;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface PatientNoteCreateDtoMapper {



    PatientNoteCreateDto toDto(PatientNote note);

    @Mapping(target = "patient", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    PatientNote toEntity(PatientNoteCreateDto dto);


}
