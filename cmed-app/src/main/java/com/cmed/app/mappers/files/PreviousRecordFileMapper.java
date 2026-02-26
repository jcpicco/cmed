package com.cmed.app.mappers.files;

import com.cmed.app.dtos.files.CreatePreviousRecordFileDto;
import com.cmed.app.dtos.files.PreviousRecordFileDto;
import com.cmed.app.dtos.files.PreviousRecordFileListDto;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.files.PreviousRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface PreviousRecordFileMapper {

    @Mapping(source = "previousRecord.id", target = "previousRecordId")
    PreviousRecordFileDto toDto(PreviousRecordFile previousRecordFile);

    @Mapping(source = "previousRecord.id", target = "previousRecordId")
    PreviousRecordFileListDto toListDto(PreviousRecordFile previousRecordFile);

    @Mapping(source = "previousRecordId", target = "previousRecord", qualifiedByName = "mapPreviousRecord")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "fileName", ignore = true)
    @Mapping(target = "originalName", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    PreviousRecordFile toEntity(CreatePreviousRecordFileDto dto);

    @Named("mapPreviousRecord")
    default PreviousRecord mapPreviousRecord(String previousRecordId) {
        if (previousRecordId == null) {
            return null;
        }
        PreviousRecord previousRecord = new PreviousRecord();
        previousRecord.setId(UUID.fromString(previousRecordId));
        return previousRecord;
    }
}
