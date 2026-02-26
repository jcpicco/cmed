package com.cmed.app.services;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.dtos.diagnoses.DiagnoseUpdateDto;
import com.cmed.app.exceptions.DiagnoseNotFoundException;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.mappers.diagnoses.DiagnoseUpdateDtoMapper;
import com.cmed.app.models.Diagnose;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.DiagnoseRepository;
import com.cmed.app.repositories.MedicalRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DiagnoseService {

    private final DiagnoseRepository diagnoseRepository;
    private final MedicalRecordRepository medicalRecordRepository;

    private final DiagnoseUpdateDtoMapper diagnoseUpdateDtoMapper;

    // TODO: IMPORTANTE
    private static final String MEDICAL_RECORD_NOT_FOUND = "MedicalRecord not found";
    private static final String DIAGNOSE_NOT_FOUND = "Diagnose not found: ";

    public List<Diagnose> getAll() {
        return diagnoseRepository.findAll();
    }

    public Diagnose getById(UUID id) {
        return diagnoseRepository.findById(id)
                .orElseThrow(() -> new DiagnoseNotFoundException(DIAGNOSE_NOT_FOUND + id));
    }

    public Diagnose create(final DiagnoseCreateDto toCreateDiagnose) {
        MedicalRecord medicalRecord = medicalRecordRepository.findById(UUID.fromString(toCreateDiagnose.getMedicalRecordId()))
                .orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND));

         Diagnose diagnose = Diagnose.builder()
                 .medicalRecord(medicalRecord)
                 .description(toCreateDiagnose.getDescription())
                 .prescription(toCreateDiagnose.getPrescription())
                 .protocol(toCreateDiagnose.getProtocol())
                 .build();

        return diagnoseRepository.save(diagnose);
    }

    public Diagnose update(UUID id, DiagnoseUpdateDto toUpdateDiagnose) {
        return diagnoseRepository.findById(id).map(diagnose -> {
            if (toUpdateDiagnose.getDescription() != null) {
                diagnose.setDescription(toUpdateDiagnose.getDescription());
            }

            if (toUpdateDiagnose.getPrescription() != null) {
                diagnose.setPrescription(toUpdateDiagnose.getPrescription());
            }

            if (toUpdateDiagnose.getProtocol() != null) {
                diagnose.setProtocol(toUpdateDiagnose.getProtocol());
            }

            return diagnoseRepository.save(diagnose);
        }).orElseThrow(() -> new RuntimeException(DIAGNOSE_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        Diagnose diagnose = diagnoseRepository.findById(id)
                .orElseThrow(() -> new DiagnoseNotFoundException(DIAGNOSE_NOT_FOUND + id));

        diagnoseRepository.delete(diagnose);
    }
}
