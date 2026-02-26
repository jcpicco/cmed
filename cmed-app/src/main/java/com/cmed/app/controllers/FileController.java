package com.cmed.app.controllers;

import com.cmed.app.enums.FileableType;
import com.cmed.app.enums.FileCategory;
import com.cmed.app.models.files.BaseFile;
import com.cmed.app.repositories.MedicalRecordRepository;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.services.files.MedicalRecordFileService;
import com.cmed.app.services.files.PreviousRecordFileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileController {
    private final MedicalRecordFileService medicalRecordFileService;
    private final PreviousRecordFileService previousRecordFileService;
    private final MedicalRecordRepository medicalRecordRepository;
    private final PreviousRecordRepository previousRecordRepository;

    @PostMapping
    public ResponseEntity<BaseFile> upload(@RequestParam("entity_type") FileableType fileableType,
                                                    @RequestParam("category") FileCategory category,
                                                    @RequestParam("file") MultipartFile multipartFile,
                                                    @RequestParam(value = "medicalRecordId", required = false) UUID medicalRecordId,
                                                    @RequestParam(value = "previousRecordId", required = false) UUID previousRecordId
    ) throws IOException {
//        String storedFileUrl = storeFile(multipartFile);
//
//        BaseFile toSaveFile;
//
//        switch(entityType.toString()) {
//            case "medical_records":
//                if (medicalRecordId == null) {
//                    return ResponseEntity.badRequest().body(null);
//                }
//                MedicalRecord medicalRecord = medicalRecordRepository.findById(medicalRecordId)
//                        .orElseThrow(() -> new RuntimeException("MedicalRecord not found"));
//
//                MedicalRecordFile medicalRecordFile = new MedicalRecordFile();
//                medicalRecordFile.setCategory(category);
//                medicalRecordFile.setUrl(storedFileUrl);
//                medicalRecordFile.setExtension(getExtension(multipartFile.getOriginalFilename()));
//                medicalRecordFile.setMedicalRecord(medicalRecord);
//
//                toSaveFile = medicalRecordFileService.create(medicalRecordFile);
//                break;
//
//            case "PREVIOUS_RECORD":
//                if (previousRecordId == null) {
//                    return ResponseEntity.badRequest().body(null);
//                }
//                PreviousRecord previousRecord = previousRecordRepository.findById(previousRecordId)
//                        .orElseThrow(() -> new RuntimeException("PreviousRecord not found"));
//
//                PreviousRecordFile previousRecordFile = new PreviousRecordFile();
//                previousRecordFile.setCategory(category);
//                previousRecordFile.setUrl(storedFileUrl);
//                previousRecordFile.setExtension(getExtension(multipartFile.getOriginalFilename()));
//                previousRecordFile.setPreviousRecord(previousRecord);
//
//                toSaveFile = previousRecordFileService.create(previousRecordFile);
//                break;
//
//            default:
//                return ResponseEntity.badRequest().body(null);
//        }
//
//        return ResponseEntity.ok(toSaveFile);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{medicalRecordFileId}")
    public ResponseEntity<Void> delete(@PathVariable UUID medicalRecordFileId) {
        medicalRecordFileService.delete(medicalRecordFileId);
        return ResponseEntity.noContent().build();
    }
}
