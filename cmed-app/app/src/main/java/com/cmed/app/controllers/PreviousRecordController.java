package com.cmed.app.controllers;

import com.cmed.app.dtos.previousRecords.PreviousRecordCreateDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordListDto;
import com.cmed.app.dtos.previousRecords.PreviousRecordUpdateDto;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.services.PreviousRecordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/previousRecords")
@RequiredArgsConstructor
public class PreviousRecordController {
    private final PreviousRecordService previousRecordService;

    @GetMapping
    public ResponseEntity<List<PreviousRecordListDto>> getAllPreviousRecords() {
        return ResponseEntity.ok(previousRecordService.getAll());
    }

    @GetMapping("/{previousRecordId}")
    public ResponseEntity<PreviousRecordDto> getPreviousRecordById(@PathVariable UUID previousRecordId) {
        return ResponseEntity.ok(previousRecordService.getById(previousRecordId));
    }

    @PostMapping
    public ResponseEntity<PreviousRecordDto> createPreviousRecord(@RequestBody @Valid PreviousRecordCreateDto previousRecord) {
        return ResponseEntity.status(HttpStatus.CREATED).body(previousRecordService.create(previousRecord));
    }

    @PatchMapping("/{previousRecordId}")
    public ResponseEntity<PreviousRecordDto> updatePreviousRecord(@PathVariable UUID previousRecordId, @RequestBody @Valid PreviousRecordUpdateDto previousRecord) {
        return ResponseEntity.status(HttpStatus.OK).body(previousRecordService.update(previousRecordId, previousRecord));
    }

    @DeleteMapping("/{previousRecordId}")
    public ResponseEntity<Void> deletePreviousRecord(@PathVariable UUID previousRecordId) {
        previousRecordService.delete(previousRecordId);
        return ResponseEntity.noContent().build();
    }
}
