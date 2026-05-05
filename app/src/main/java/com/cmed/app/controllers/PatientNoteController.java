package com.medcentermanager.app.controllers;

import com.medcentermanager.app.dtos.notes.NoteCreateDto;
import com.medcentermanager.app.dtos.notes.NoteUpdateDto;
import com.medcentermanager.app.models.notes.PatientNote;
import com.medcentermanager.app.services.PatientNoteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/patients/{patientId}/notes")
@RequiredArgsConstructor
public class PatientNoteController {
    private final PatientNoteService noteService;

    @GetMapping
    public ResponseEntity<List<PatientNote>> getAllNotes(@PathVariable UUID patientId) {
        return ResponseEntity.ok(noteService.getAllByPatientId(patientId));
    }

    @GetMapping("/{noteId}")
    public ResponseEntity<PatientNote> getNoteById(@PathVariable UUID patientId, @PathVariable UUID noteId) {
        return ResponseEntity.ok(noteService.getById(noteId));
    }

    @PostMapping
    public ResponseEntity<PatientNote> createNote(@PathVariable UUID patientId, @RequestBody @Valid NoteCreateDto note) {
        return ResponseEntity.status(HttpStatus.CREATED).body(noteService.create(patientId, note));
    }

    @PatchMapping("/{noteId}")
    public ResponseEntity<PatientNote> updateNote(@PathVariable UUID patientId, @PathVariable UUID noteId, @RequestBody @Valid NoteUpdateDto note) {
        return ResponseEntity.status(HttpStatus.OK).body(noteService.update(noteId, note));
    }

    @DeleteMapping("/{noteId}")
    public ResponseEntity<Void> deleteNote(@PathVariable UUID patientId, @PathVariable UUID noteId) {
        noteService.delete(noteId);
        return ResponseEntity.noContent().build();
    }
}
