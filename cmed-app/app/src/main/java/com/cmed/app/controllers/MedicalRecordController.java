package com.cmed.app.controllers;

import com.cmed.app.dtos.medicalRecords.MedicalRecordCreateDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordUpdateDto;
import com.cmed.app.models.MedicalRecord;
import com.cmed.app.services.MedicalRecordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/medicalRecords")
@RequiredArgsConstructor
public class MedicalRecordController {
    private final MedicalRecordService medicalRecordService;

    @GetMapping
    public ResponseEntity<List<MedicalRecordListDto>> getAllMedicalRecords() {
        return ResponseEntity.ok(medicalRecordService.getAll());
    }

    @GetMapping("/{medicalRecordId}")
    public ResponseEntity<MedicalRecordDto> getMedicalRecordById(@PathVariable UUID medicalRecordId) {
        return ResponseEntity.ok(medicalRecordService.getById(medicalRecordId));
    }

    @PostMapping
    public ResponseEntity<MedicalRecordDto> createMedicalRecord(@RequestBody @Valid MedicalRecordCreateDto medicalRecord) {
        return ResponseEntity.status(HttpStatus.CREATED).body(medicalRecordService.create(medicalRecord));
    }

    @PatchMapping("/{medicalRecordId}")
    public ResponseEntity<MedicalRecordDto> updateMedicalRecord(@PathVariable UUID medicalRecordId, @RequestBody @Valid MedicalRecordUpdateDto medicalRecord) {
        return ResponseEntity.status(HttpStatus.OK).body(medicalRecordService.update(medicalRecordId, medicalRecord));
    }

    @DeleteMapping("/{medicalRecordId}")
    public ResponseEntity<Void> deleteMedicalRecord(@PathVariable UUID medicalRecordId) {
        medicalRecordService.delete(medicalRecordId);
        return ResponseEntity.noContent().build();
    }
}
