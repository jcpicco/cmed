package com.medcentermanager.app.mappers.notes;

import com.medcentermanager.app.dtos.notes.NoteCreateDto;
import com.medcentermanager.app.models.notes.MedicalRecordNote;
import com.medcentermanager.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface MedicalRecordNoteCreateDtoMapper {



    NoteCreateDto toDto(MedicalRecordNote note);

    @Mapping(target = "medicalRecord", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    MedicalRecordNote toEntity(NoteCreateDto dto);


}