package com.cmed.app.controllers;

import com.cmed.app.dtos.diagnoses.DiagnoseCreateDto;
import com.cmed.app.dtos.diagnoses.DiagnoseUpdateDto;
import com.cmed.app.models.Diagnose;
import com.cmed.app.services.DiagnoseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/diagnoses")
@RequiredArgsConstructor
public class DiagnoseController {
    private final DiagnoseService diagnoseService;

    @GetMapping
    public ResponseEntity<List<Diagnose>> getAllDiagnoses() {
        return ResponseEntity.ok(diagnoseService.getAll());
    }

    @GetMapping("/{diagnoseId}")
    public ResponseEntity<Diagnose> getDiagnoseById(@PathVariable UUID diagnoseId) {
        return ResponseEntity.ok(diagnoseService.getById(diagnoseId));
    }

    @PostMapping
    public ResponseEntity<Diagnose> createDiagnose(@RequestBody @Valid DiagnoseCreateDto diagnose) {
        return ResponseEntity.status(HttpStatus.CREATED).body(diagnoseService.create(diagnose));
    }

    @PatchMapping("/{diagnoseId}")
    public ResponseEntity<Diagnose> updateDiagnose(@PathVariable UUID diagnoseId, @RequestBody @Valid DiagnoseUpdateDto diagnose) {
        return ResponseEntity.status(HttpStatus.OK).body(diagnoseService.update(diagnoseId, diagnose));
    }

    @DeleteMapping("/{diagnoseId}")
    public ResponseEntity<Void> deleteDiagnose(@PathVariable UUID diagnoseId) {
        diagnoseService.delete(diagnoseId);
        return ResponseEntity.noContent().build();
    }
}
