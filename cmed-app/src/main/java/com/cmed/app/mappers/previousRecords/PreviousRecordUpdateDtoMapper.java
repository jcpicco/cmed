package com.cmed.app.mappers.previousRecords;

import com.cmed.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.cmed.app.models.PreviousRecord;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PreviousRecordUpdateDtoMapper {
    PreviousRecordUpdateDto toDto(PreviousRecord previousRecord);
}