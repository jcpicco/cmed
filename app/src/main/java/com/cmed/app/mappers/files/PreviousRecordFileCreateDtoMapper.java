package com.medcentermanager.app.mappers.files;

import com.medcentermanager.app.dtos.files.CreatePreviousRecordFileDto;
import com.medcentermanager.app.models.files.PreviousRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PreviousRecordFileCreateDtoMapper {
    PreviousRecordFileCreateDtoMapper INSTANCE = Mappers.getMapper(PreviousRecordFileCreateDtoMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "fileName", ignore = true)
    @Mapping(target = "originalName", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "previousRecord", ignore = true)
    PreviousRecordFile toEntity(CreatePreviousRecordFileDto dto);
}
