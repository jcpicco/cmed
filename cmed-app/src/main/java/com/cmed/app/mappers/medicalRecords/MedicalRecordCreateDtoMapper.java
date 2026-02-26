package com.cmed.app.mappers.medicalRecords;

import com.cmed.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface MedicalRecordCreateDtoMapper {

    @Mapping(source = "patient.id", target = "patientId")
    MedicalRecordCreateDto toDto(MedicalRecord medicalRecord);

    @Mapping(source = "patientId", target = "patient", qualifiedByName = "mapPatient")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "notes", ignore = true)
    @Mapping(target = "diagnoses", ignore = true)
    @Mapping(target = "files", ignore = true)
    MedicalRecord toEntity(MedicalRecordCreateDto dto);

    @Named("mapPatient")
    default Patient mapPatient(UUID patientId) {
        if (patientId == null) {
            return null;
        }
        Patient patient = new Patient();
        patient.setId(patientId);
        return patient;
    }
}