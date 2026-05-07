package com.medcentermanager.app.services;

import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordDto;
import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordListDto;
import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.medcentermanager.app.exceptions.MedicalRecordNotFoundException;
import com.medcentermanager.app.exceptions.PatientNotFoundException;
import com.medcentermanager.app.mappers.medicalRecords.MedicalRecordDtoMapper;
import com.medcentermanager.app.mappers.medicalRecords.MedicalRecordListDtoMapper;
import com.medcentermanager.app.mappers.medicalRecords.MedicalRecordUpdateDtoMapper;
import com.medcentermanager.app.models.MedicalRecord;
import com.medcentermanager.app.models.Patient;
import com.medcentermanager.app.repositories.MedicalRecordRepository;
import com.medcentermanager.app.repositories.PatientRepository;
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
                .background(toCreateMedicalRecord.getBackground())
                .diagnose(toCreateMedicalRecord.getDiagnose())
                .protocol(toCreateMedicalRecord.getProtocol())
                .prescription(toCreateMedicalRecord.getPrescription())
                .build();

        medicalRecordRepository.save(medicalRecord);

        return medicalRecordDtoMapper.toDto(medicalRecord);
    }

    public MedicalRecordDto update(UUID id, MedicalRecordUpdateDto toUpdateMedicalRecord) {
        return medicalRecordRepository.findById(id).map(medicalRecord -> {
            if (toUpdateMedicalRecord.getDescription() != null) {
                medicalRecord.setDescription(toUpdateMedicalRecord.getDescription());
            }
            if (toUpdateMedicalRecord.getBackground() != null) {
                medicalRecord.setBackground(toUpdateMedicalRecord.getBackground());
            }
            if (toUpdateMedicalRecord.getDiagnose() != null) {
                medicalRecord.setDiagnose(toUpdateMedicalRecord.getDiagnose());
            }
            if (toUpdateMedicalRecord.getProtocol() != null) {
                medicalRecord.setProtocol(toUpdateMedicalRecord.getProtocol());
            }
            if (toUpdateMedicalRecord.getPrescription() != null) {
                medicalRecord.setPrescription(toUpdateMedicalRecord.getPrescription());
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
