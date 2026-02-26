package com.cmed.app.mappers.previousRecords;

import com.cmed.app.dtos.previousRecords.PreviousRecordCreateDto;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface PreviousRecordCreateDtoMapper {

    @Mapping(source = "patient.id", target = "patientId")
    PreviousRecordCreateDto toDto(PreviousRecord previousRecord);

    @Mapping(source = "patientId", target = "patient", qualifiedByName = "mapPatient")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "files", ignore = true)
    PreviousRecord toEntity(PreviousRecordCreateDto dto);

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