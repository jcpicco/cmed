package com.cmed.app.mappers.previousRecords;

import com.cmed.app.dtos.previousRecords.PreviousRecordListDto;
import com.cmed.app.models.PreviousRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PreviousRecordListDtoMapper {
    PreviousRecordListDtoMapper INSTANCE = Mappers.getMapper(PreviousRecordListDtoMapper.class);

    @Mapping(source = "patient.id", target = "patientId")
    PreviousRecordListDto toDto(PreviousRecord previousRecord);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "patient", ignore = true)
    @Mapping(target = "files", ignore = true)
    PreviousRecord toEntity(PreviousRecordListDto dto);
}