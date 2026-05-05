package com.medcentermanager.app.services;

import com.medcentermanager.app.dtos.notes.NoteCreateDto;
import com.medcentermanager.app.dtos.notes.NoteUpdateDto;
import com.medcentermanager.app.exceptions.NoteNotFoundException;
import com.medcentermanager.app.exceptions.PatientNotFoundException;
import com.medcentermanager.app.models.notes.PatientNote;
import com.medcentermanager.app.models.Patient;
import com.medcentermanager.app.repositories.PatientNoteRepository;
import com.medcentermanager.app.repositories.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PatientNoteService {
    private final PatientNoteRepository patientNoteRepository;
    private final PatientRepository patientRepository;

    private static final String PATIENT_NOT_FOUND = "Patient not found";
    private static final String NOTE_NOT_FOUND = "Note not found";

    public List<PatientNote> getAll() {
        return patientNoteRepository.findAll();
    }

    public List<PatientNote> getAllByPatientId(UUID patientId) {
        return patientNoteRepository.findAllByPatientId(patientId);
    }

    public PatientNote getById(UUID id) {
        return patientNoteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND));
    }

    public PatientNote create(UUID patientId, NoteCreateDto noteRequest) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND));

        PatientNote note = new PatientNote();
        note.setPatient(patient);
        note.setDescription(noteRequest.getDescription());

        return patientNoteRepository.save(note);
    }



    public PatientNote update(UUID id, NoteUpdateDto toUpdateNote) {
        return patientNoteRepository.findById(id).map(note -> {
            if (toUpdateNote.getDescription() != null) {
                note.setDescription(toUpdateNote.getDescription());
            }

            return patientNoteRepository.save(note);
        }).orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND));
    }

    public void delete(UUID id) {
        PatientNote note = patientNoteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(NOTE_NOT_FOUND));

        patientNoteRepository.delete(note);
    }
}
