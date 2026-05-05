package com.medcentermanager.app.mappers.notes;

import com.medcentermanager.app.dtos.notes.NoteUpdateDto;
import com.medcentermanager.app.models.Note;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface NoteUpdateDtoMapper {
    NoteUpdateDto toDto(Note note);
}