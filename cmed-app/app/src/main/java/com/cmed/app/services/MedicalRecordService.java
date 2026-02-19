package com.cmed.app.services;

import com.cmed.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.exceptions.PatientNotFoundException;
import com.cmed.app.mappers.medicalRecords.MedicalRecordDtoMapper;
import com.cmed.app.mappers.medicalRecords.MedicalRecordListDtoMapper;
import com.cmed.app.mappers.medicalRecords.MedicalRecordUpdateDtoMapper;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MedicalRecordService {
    private final PatientRepository patientRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    private final MedicalRecordDtoMapper medicalRecordDtoMapper;
    private final MedicalRecordListDtoMapper medicalRecordListDtoMapper;
    private final MedicalRecordUpdateDtoMapper medicalRecordUpdateDtoMapper;

    // TODO: IMPORTANTE
    private static final String PATIENT_NOT_FOUND = "Patient not found";
    private static final String MEDICAL_RECORD_NOT_FOUND = "MedicalRecord not found: ";

    public List<MedicalRecordListDto> getAll() {
        List<MedicalRecord> medicalRecords = medicalRecordRepository.findAll();

        return medicalRecords.stream().map(medicalRecordListDtoMapper::toDto).toList();
    }

    public List<MedicalRecordListDto> getAllByPatientId(UUID patientId) {
        patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND));

        List<MedicalRecord> medicalRecords = medicalRecordRepository.findAllByPatientId(patientId);

        return medicalRecords.stream().map(medicalRecordListDtoMapper::toDto).toList();
    }

    public MedicalRecordDto getById(UUID id) {
        MedicalRecord medicalRecord = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND + id));

        return medicalRecordDtoMapper.toDto(medicalRecord);
    }

    public MedicalRecordDto create(final MedicalRecordCreateDto toCreateMedicalRecord) {
        Patient patient = patientRepository.findById(UUID.fromString(toCreateMedicalRecord.getPatientId()))
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND));

        MedicalRecord medicalRecord = MedicalRecord.builder()
                .patient(patient)
                .description(toCreateMedicalRecord.getDescription())
                .build();

        medicalRecordRepository.save(medicalRecord);

        return medicalRecordDtoMapper.toDto(medicalRecord);
    }

    public MedicalRecordDto update(UUID id, MedicalRecordUpdateDto toUpdateMedicalRecord) {
        return medicalRecordRepository.findById(id).map(medicalRecord -> {
            if (toUpdateMedicalRecord.getDescription() != null) {
                medicalRecord.setDescription(toUpdateMedicalRecord.getDescription());
            }

            MedicalRecord updatedMedicalRecord = medicalRecordRepository.save(medicalRecord);
            return medicalRecordDtoMapper.toDto(updatedMedicalRecord);
        }).orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        MedicalRecord medicalRecord = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND + id));

        medicalRecordRepository.delete(medicalRecord);
    }
}
