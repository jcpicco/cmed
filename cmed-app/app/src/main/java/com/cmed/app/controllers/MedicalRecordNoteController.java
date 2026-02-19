package com.cmed.app.controllers;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.dtos.notes.MedicalRecordNoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.models.notes.MedicalRecordNote;
import com.cmed.app.services.MedicalRecordNoteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/medicalRecords/{medicalRecordId}/notes")
@RequiredArgsConstructor
public class MedicalRecordNoteController {
    private final MedicalRecordNoteService noteService;

    @GetMapping
    public ResponseEntity<List<MedicalRecordNote>> getAllNotes(@PathVariable UUID medicalRecordId) {
        return ResponseEntity.ok(noteService.getAllByMedicalRecordId(medicalRecordId));
    }

    @GetMapping("/{noteId}")
    public ResponseEntity<MedicalRecordNote> getNoteById(@PathVariable UUID medicalRecordId, @PathVariable UUID noteId) {
        return ResponseEntity.ok(noteService.getById(noteId));
    }

    @PostMapping
    public ResponseEntity<MedicalRecordNote> createNote(@PathVariable UUID medicalRecordId, @RequestBody @Valid MedicalRecordNoteCreateDto note) {
        return ResponseEntity.status(HttpStatus.CREATED).body(noteService.create(medicalRecordId, note));
    }

    @PatchMapping("/{noteId}")
    public ResponseEntity<MedicalRecordNote> updateNote(@PathVariable UUID medicalRecordId, @PathVariable UUID noteId, @RequestBody @Valid NoteUpdateDto note) {
        return ResponseEntity.status(HttpStatus.OK).body(noteService.update(noteId, note));
    }

    @DeleteMapping("/{noteId}")
    public ResponseEntity<Void> deleteNote(@PathVariable UUID medicalRecordId, @PathVariable UUID noteId) {
        noteService.delete(noteId);
        return ResponseEntity.noContent().build();
    }
}
