package com.cmed.app.mappers.files;

import com.cmed.app.dtos.files.CreateMedicalRecordFileDto;
import com.cmed.app.dtos.files.MedicalRecordFileDto;
import com.cmed.app.dtos.files.MedicalRecordFileListDto;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.files.MedicalRecordFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface MedicalRecordFileMapper {

    @Mapping(source = "medicalRecord.id", target = "medicalRecordId")
    MedicalRecordFileDto toDto(MedicalRecordFile medicalRecordFile);

    @Mapping(source = "medicalRecord.id", target = "medicalRecordId")
    MedicalRecordFileListDto toListDto(MedicalRecordFile medicalRecordFile);

    @Mapping(source = "medicalRecordId", target = "medicalRecord", qualifiedByName = "mapMedicalRecord")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "fileName", ignore = true)
    @Mapping(target = "originalName", ignore = true)
    @Mapping(target = "fileExtension", ignore = true)
    @Mapping(target = "fileSize", ignore = true)
    @Mapping(target = "category", ignore = true)
    MedicalRecordFile toEntity(CreateMedicalRecordFileDto dto);

    @Named("mapMedicalRecord")
    default MedicalRecord mapMedicalRecord(String medicalRecordId) {
        if (medicalRecordId == null) {
            return null;
        }
        MedicalRecord medicalRecord = new MedicalRecord();
        medicalRecord.setId(UUID.fromString(medicalRecordId));
        return medicalRecord;
    }
}
