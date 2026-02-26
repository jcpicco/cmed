package com.cmed.app.mappers.diagnoses;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.models.Diagnose;
import com.cmed.app.models.MedicalRecord;
import org.mapstruct.*;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface DiagnoseCreateDtoMapper {

    @Mapping(source = "medicalRecord.id", target = "medicalRecordId")
    DiagnoseCreateDto toDto(Diagnose diagnose);

    @Mapping(source = "medicalRecordId", target = "medicalRecord", qualifiedByName = "mapMedicalRecord")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Diagnose toEntity(DiagnoseCreateDto dto);

    @Named("mapMedicalRecord")
    default MedicalRecord mapMedicalRecord(UUID medicalRecordId) {
        if (medicalRecordId == null) {
            return null;
        }
        MedicalRecord medicalRecord = new MedicalRecord();
        medicalRecord.setId(medicalRecordId);
        return medicalRecord;
    }
}