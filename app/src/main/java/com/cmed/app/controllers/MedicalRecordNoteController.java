package com.medcentermanager.app.controllers;

import com.medcentermanager.app.dtos.notes.NoteCreateDto;
import com.medcentermanager.app.dtos.notes.NoteUpdateDto;
import com.medcentermanager.app.models.notes.MedicalRecordNote;
import com.medcentermanager.app.services.MedicalRecordNoteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/medical-records/{medicalRecordId}/notes")
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
    public ResponseEntity<MedicalRecordNote> createNote(@PathVariable UUID medicalRecordId, @RequestBody @Valid NoteCreateDto note) {
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
