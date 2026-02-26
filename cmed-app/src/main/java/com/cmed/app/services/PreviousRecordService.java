package com.cmed.app.services;

import com.cmed.app.dtos.previousRecords.PreviousRecordCreateDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordListDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.cmed.app.exceptions.PatientNotFoundException;
import com.cmed.app.exceptions.PreviousRecordNotFoundException;
import com.cmed.app.mappers.previousRecords.PreviousRecordDtoMapper;
import com.cmed.app.mappers.previousRecords.PreviousRecordListDtoMapper;
import com.cmed.app.mappers.previousRecords.PreviousRecordUpdateDtoMapper;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.repositories.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PreviousRecordService {
    private final PatientRepository patientRepository;
    private final PreviousRecordRepository previousRecordRepository;
    private final PreviousRecordDtoMapper previousRecordDtoMapper;
    private final PreviousRecordListDtoMapper previousRecordListDtoMapper;
    private final PreviousRecordUpdateDtoMapper previousRecordUpdateDtoMapper;

    // TODO: IMPORTANTE
    private static final String PATIENT_NOT_FOUND = "Patient not found";
    private static final String PREVIOUS_RECORD_NOT_FOUND = "PreviousRecord not found: ";

    public List<PreviousRecordListDto> getAll() {
        List<PreviousRecord> previousRecords = previousRecordRepository.findAll();

        return previousRecords.stream().map(previousRecordListDtoMapper::toDto).toList();
    }

    public List<PreviousRecordListDto> getAllByPatientId(UUID patientId) {
        patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND));
        
        List<PreviousRecord> previousRecords = previousRecordRepository.findAllByPatientId(patientId);

        return previousRecords.stream().map(previousRecordListDtoMapper::toDto).toList();
    }

    public PreviousRecordDto getById(UUID id) {
        PreviousRecord previousRecord = previousRecordRepository.findById(id)
                .orElseThrow(() -> new PreviousRecordNotFoundException(PREVIOUS_RECORD_NOT_FOUND + id));

        return previousRecordDtoMapper.toDto(previousRecord);
    }

    public PreviousRecordDto create(final PreviousRecordCreateDto toCreatePreviousRecord) {
        Patient patient = patientRepository.findById(UUID.fromString(toCreatePreviousRecord.getPatientId()))
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND));

        PreviousRecord previousRecord = PreviousRecord.builder()
                .patient(patient)
                .description(toCreatePreviousRecord.getDescription())
                .build();

        previousRecordRepository.save(previousRecord);

        return previousRecordDtoMapper.toDto(previousRecord);
    }

    public PreviousRecordDto update(UUID id, PreviousRecordUpdateDto toUpdatePreviousRecord) {
        return previousRecordRepository.findById(id).map(previousRecord -> {
            if (toUpdatePreviousRecord.getDescription() != null) {
                previousRecord.setDescription(toUpdatePreviousRecord.getDescription());
            }

            PreviousRecord updatedPreviousRecord = previousRecordRepository.save(previousRecord);
            return previousRecordDtoMapper.toDto(updatedPreviousRecord);
        }).orElseThrow(() -> new PreviousRecordNotFoundException(PREVIOUS_RECORD_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        PreviousRecord previousRecord = previousRecordRepository.findById(id)
                .orElseThrow(() -> new PreviousRecordNotFoundException(PREVIOUS_RECORD_NOT_FOUND + id));

        previousRecordRepository.delete(previousRecord);
    }
}
