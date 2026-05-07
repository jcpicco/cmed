package com.medcentermanager.app.controllers;

import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordDto;
import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordListDto;
import com.medcentermanager.app.dtos.patients.*;
import com.medcentermanager.app.dtos.previousRecords.PreviousRecordListDto;
import com.medcentermanager.app.services.MedicalRecordService;
import com.medcentermanager.app.services.PatientService;
import com.medcentermanager.app.services.PreviousRecordService;
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

    @GetMapping("/{patientId}/medical-records")
    public ResponseEntity<List<MedicalRecordListDto>> getAllMedicalRecordsByPatientId(@PathVariable UUID patientId) {
        return ResponseEntity.ok(medicalRecordService.getAllByPatientId(patientId));
    }

    @GetMapping("/{patientId}/previous-records")
    public ResponseEntity<List<PreviousRecordListDto>> getAllPreviousRecordsByPatientId(@PathVariable UUID patientId) {
        return ResponseEntity.ok(previousRecordService.getAllByPatientId(patientId));
    }
}
