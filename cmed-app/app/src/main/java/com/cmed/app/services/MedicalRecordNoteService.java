package com.cmed.app.services;

import com.cmed.app.dtos.notes.MedicalRecordNoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.exceptions.MedicalRecordNotFoundException;
import com.cmed.app.exceptions.NoteNotFoundException;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.MedicalRecordNoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MedicalRecordNoteService {
    private final MedicalRecordNoteRepository noteRepository;
    private final MedicalRecordRepository medicalRecordRepository;

    private static final String MEDICAL_RECORD_NOT_FOUND = "MedicalRecord not found";
    private static final String NOTE_NOT_FOUND = "Note not found: ";

    public List<MedicalRecordNote> getAll() {
        return noteRepository.findAll();
    }

    public List<MedicalRecordNote> getAllByMedicalRecordId(UUID medicalRecordId) {
        return noteRepository.findAllByMedicalRecordId(medicalRecordId);
    }

    public MedicalRecordNote getById(UUID id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND + id));
    }

    public MedicalRecordNote create(UUID medicalRecordId, MedicalRecordNoteCreateDto noteRequest) {
        MedicalRecord medicalRecord = medicalRecordRepository.findById(medicalRecordId)
                .orElseThrow(() -> new MedicalRecordNotFoundException(MEDICAL_RECORD_NOT_FOUND));

        MedicalRecordNote note = new MedicalRecordNote();
        note.setMedicalRecord(medicalRecord);
        note.setDescription(noteRequest.getDescription());

        return noteRepository.save(note);
    }



    public MedicalRecordNote update(UUID id, NoteUpdateDto toUpdateNote) {
        return noteRepository.findById(id).map(note -> {
            if (toUpdateNote.getDescription() != null) {
                note.setDescription(toUpdateNote.getDescription());
            }

            return noteRepository.save(note);
        }).orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        MedicalRecordNote note = noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND + id));

        noteRepository.delete(note);
    }
}
