package com.cmed.app.controllers;

import com.cmed.app.dtos.notes.NoteCreateDto;
import com.cmed.app.dtos.notes.NoteUpdateDto;
import com.cmed.app.models.Tracing;
import com.cmed.app.services.TracingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/medical-records/{medicalRecordId}/tracings")
@RequiredArgsConstructor
public class TracingController {
    private final TracingService tracingService;

    @GetMapping
    public ResponseEntity<List<Tracing>> getAllTracings(@PathVariable UUID medicalRecordId) {
        return ResponseEntity.ok(tracingService.getAllByMedicalRecordId(medicalRecordId));
    }

    @GetMapping("/{tracingId}")
    public ResponseEntity<Tracing> getTracingById(@PathVariable UUID medicalRecordId, @PathVariable UUID tracingId) {
        return ResponseEntity.ok(tracingService.getById(tracingId));
    }

    @PostMapping
    public ResponseEntity<Tracing> createTracing(@PathVariable UUID medicalRecordId, @RequestBody @Valid NoteCreateDto tracing) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tracingService.create(medicalRecordId, tracing));
    }

    @PatchMapping("/{tracingId}")
    public ResponseEntity<Tracing> updateTracing(@PathVariable UUID medicalRecordId, @PathVariable UUID tracingId, @RequestBody @Valid NoteUpdateDto tracing) {
        return ResponseEntity.status(HttpStatus.OK).body(tracingService.update(tracingId, tracing));
    }

    @DeleteMapping("/{tracingId}")
    public ResponseEntity<Void> deleteTracing(@PathVariable UUID medicalRecordId, @PathVariable UUID tracingId) {
        tracingService.delete(tracingId);
        return ResponseEntity.noContent().build();
    }
}
