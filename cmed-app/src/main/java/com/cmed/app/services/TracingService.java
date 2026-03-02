package com.cmed.app.services;

import com.cmed.app.dtos.notes.NoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.Tracing;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.TracingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TracingService {
    private final TracingRepository tracingRepository;
    private final MedicalRecordRepository medicalRecordRepository;

    private static final String MEDICAL_RECORD_NOT_FOUND = "MedicalRecord not found";
    private static final String TRACING_NOT_FOUND = "Tracing not found: ";

    public List<Tracing> getAll() {
        return tracingRepository.findAll();
    }

    public List<Tracing> getAllByMedicalRecordId(UUID medicalRecordId) {
        return tracingRepository.findAllByMedicalRecordId(medicalRecordId);
    }

    public Tracing getById(UUID id) {
        return tracingRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(TRACING_NOT_FOUND + id));
    }

    public Tracing create(UUID medicalRecordId, NoteCreateDto noteRequest) {
        MedicalRecord medicalRecord = medicalRecordRepository.findById(medicalRecordId)
                .orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND));

        Tracing tracing = new Tracing();
        tracing.setMedicalRecord(medicalRecord);
        tracing.setDescription(noteRequest.getDescription());

        return tracingRepository.save(tracing);
    }

    public Tracing update(UUID id, NoteUpdateDto toUpdateNote) {
        return tracingRepository.findById(id).map(tracing -> {
            if (toUpdateNote.getDescription() != null) {
                tracing.setDescription(toUpdateNote.getDescription());
            }

            return tracingRepository.save(tracing);
        }).orElseThrow(() -> new NoteNotFoundException(TRACING_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        Tracing tracing = tracingRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(TRACING_NOT_FOUND + id));

        tracingRepository.delete(tracing);
    }
}
