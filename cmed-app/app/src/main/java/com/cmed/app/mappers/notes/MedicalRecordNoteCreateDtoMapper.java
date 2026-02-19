package com.cmed.app.mappers.notes;

import com.cmed.app.dtos.notes.MedicalRecordNoteCreateDto;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface MedicalRecordNoteCreateDtoMapper {



    MedicalRecordNoteCreateDto toDto(MedicalRecordNote note);

    @Mapping(target = "medicalRecord", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    MedicalRecordNote toEntity(MedicalRecordNoteCreateDto dto);


}