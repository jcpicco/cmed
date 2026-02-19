package com.cmed.app.mappers.notes;

import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.models.Note;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface NoteUpdateDtoMapper {
    NoteUpdateDto toDto(Note note);
}