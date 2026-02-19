package com.cmed.app.mappers.previousRecords;

import com.cmed.app.dtos.previousRecords.PreviousRecordDto;
import com.cmed.app.models.PreviousRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PreviousRecordDtoMapper {
    PreviousRecordDtoMapper INSTANCE = Mappers.getMapper(PreviousRecordDtoMapper.class);

    @Mapping(source = "patient.id", target = "patientId")
    PreviousRecordDto toDto(PreviousRecord previousRecord);

    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "patient", ignore = true)
    @Mapping(target = "files", ignore = true)
    PreviousRecord toEntity(PreviousRecordDto dto);
}