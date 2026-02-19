package com.cmed.app.controllers;

import com.cmed.app.dtos.medicalRecords.MedicalRecordDto;
import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.dtos.patients.*;
import com.cmed.app.dtos.previousRecords.PreviousRecordListDto;
import com.cmed.app.services.MedicalRecordService;
import com.cmed.app.services.PatientService;
import com.cmed.app.services.PreviousRecordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/patients")
@RequiredArgsConstructor
public class PatientController {
    private final PatientService patientService;
    private final MedicalRecordService medicalRecordService;
    private final PreviousRecordService previousRecordService;

    @GetMapping
    public ResponseEntity<List<PatientListDto>> getAllPatients() {
        return ResponseEntity.ok(patientService.getAll());
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable UUID patientId) {
        return ResponseEntity.ok(patientService.getById(patientId));
    }

    @PostMapping
    public ResponseEntity<PatientDto> createPatient(@RequestBody @Valid PatientCreateDto patient) {
        return ResponseEntity.status(HttpStatus.CREATED).body(patientService.create(patient));
    }

    @PatchMapping("/{patientId}")
    public ResponseEntity<PatientDto> updatePatient(@PathVariable UUID patientId, @RequestBody @Valid PatientUpdateDto patient) {
        return ResponseEntity.status(HttpStatus.OK).body(patientService.update(patientId, patient));
    }

    @DeleteMapping("/{patientId}")
    public ResponseEntity<Void> deletePatient(@PathVariable UUID patientId) {
        patientService.delete(patientId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{patientId}/medicalRecords")
    public ResponseEntity<List<MedicalRecordListDto>> getAllMedicalRecordsByPatientId(@PathVariable UUID patientId) {
        return ResponseEntity.ok(medicalRecordService.getAllByPatientId(patientId));
    }

    @GetMapping("/{patientId}/previousRecords")
    public ResponseEntity<List<PreviousRecordListDto>> getAllPreviousRecordsByPatientId(@PathVariable UUID patientId) {
        return ResponseEntity.ok(previousRecordService.getAllByPatientId(patientId));
    }
}
