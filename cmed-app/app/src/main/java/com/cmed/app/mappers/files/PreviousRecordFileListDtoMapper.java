package com.cmed.app.mappers.files;

import com.cmed.app.dtos.files.PreviousRecordFileListDto;
import com.cmed.app.models.files.PreviousRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PreviousRecordFileListDtoMapper {
    PreviousRecordFileListDtoMapper INSTANCE = Mappers.getMapper(PreviousRecordFileListDtoMapper.class);

    @Mapping(source = "previousRecord.id", target = "previousRecordId")
    PreviousRecordFileListDto toDto(PreviousRecordFile previousRecordFile);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "previousRecord", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    PreviousRecordFile toEntity(PreviousRecordFileListDto dto);
}
