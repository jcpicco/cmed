package com.medcentermanager.app.mappers.previousRecords;

import com.medcentermanager.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.medcentermanager.app.models.PreviousRecord;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PreviousRecordUpdateDtoMapper {
    PreviousRecordUpdateDto toDto(PreviousRecord previousRecord);
}