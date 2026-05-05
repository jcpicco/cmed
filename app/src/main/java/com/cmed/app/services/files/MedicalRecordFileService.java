package com.medcentermanager.app.services.files;

import com.medcentermanager.app.dtos.files.CreateMedicalRecordFileDto;
import com.medcentermanager.app.dtos.files.MedicalRecordFileDto;
import com.medcentermanager.app.exceptions.FileStorageException;
import com.medcentermanager.app.exceptions.MedicalRecordFileNotFoundException;
import com.medcentermanager.app.exceptions.MedicalRecordNotFoundException;
import com.medcentermanager.app.mappers.files.MedicalRecordFileMapper;
import com.medcentermanager.app.models.MedicalRecord;
import com.medcentermanager.app.models.files.MedicalRecordFile;
import com.medcentermanager.app.repositories.MedicalRecordRepository;
import com.medcentermanager.app.repositories.files.MedicalRecordFileRepository;
import com.medcentermanager.app.utils.FileStorageUtils;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MedicalRecordFileService {
    private static final Logger logger = LoggerFactory.getLogger(MedicalRecordFileService.class);

    private final MedicalRecordFileRepository medicalRecordFileRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    private final FileStorageUtils fileStorageUtils;
    private final MedicalRecordFileMapper medicalRecordFileMapper;

    @Value("${file.storage.path}")
    private String baseStoragePath;

    private static final String MEDICAL_RECORD_NOT_FOUND = "Medical Record not found with id: ";
    private static final String FILE_NOT_FOUND = "Medical Record File not found with id: ";

    public List<MedicalRecordFileDto> getAllByMedicalRecordId(UUID medicalRecordId) {
        return medicalRecordFileRepository.findByMedicalRecordId(medicalRecordId)
                .stream()
                .map(medicalRecordFileMapper::toDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public MedicalRecordFileDto create(CreateMedicalRecordFileDto createDto) {
        MedicalRecord medicalRecord = medicalRecordRepository
                .findById(UUID.fromString(createDto.getMedicalRecordId()))
                .orElseThrow(() -> new MedicalRecordNotFoundException(
                        MEDICAL_RECORD_NOT_FOUND + createDto.getMedicalRecordId()));

        MedicalRecordFile file = medicalRecordFileMapper.toEntity(createDto);
        file.setMedicalRecord(medicalRecord);

        try {
            // Llenar todos los campos ANTES de persistir
            fileStorageUtils.storeFile(createDto.getFile(), file);

            // UN SOLO save al final con TODO completado
            // No usar saveAndFlush para evitar conflictos de versionamiento
            file = medicalRecordFileRepository.save(file);

            logger.info("Medical record file created successfully: id={}, originalName={}, size={}",
                    file.getId(), file.getOriginalName(), file.getFileSize());
            return medicalRecordFileMapper.toDto(file);
        } catch (Exception e) {
            logger.error("Error creating medical record file for record id: {}", createDto.getMedicalRecordId(), e);
            throw new FileStorageException("Error creating file for medical record: " + createDto.getMedicalRecordId(),
                    e);
        }
    }

    public byte[] getFileContent(UUID fileId) {
        MedicalRecordFile file = medicalRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new MedicalRecordFileNotFoundException(FILE_NOT_FOUND + fileId));

        try {
            Path filePath = Paths.get(baseStoragePath)
                    .resolve(file.getCategory().toString().toLowerCase())
                    .resolve(file.getFileName());

            logger.debug("Reading file content from: {}", filePath);
            byte[] content = Files.readAllBytes(filePath);
            logger.info("File content read successfully: {}", fileId);
            return content;
        } catch (IOException e) {
            logger.error("Error reading file content: fileId={}, message={}", fileId, e.getMessage(), e);
            throw new FileStorageException("Error reading file: " + fileId, e);
        }
    }

    public MedicalRecordFileDto getFileById(UUID fileId) {
        MedicalRecordFile file = medicalRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new MedicalRecordFileNotFoundException(FILE_NOT_FOUND + fileId));
        return medicalRecordFileMapper.toDto(file);
    }

    @Transactional
    public void delete(UUID fileId) {
        MedicalRecordFile file = medicalRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new MedicalRecordFileNotFoundException(FILE_NOT_FOUND + fileId));

        try {
            fileStorageUtils.deleteFile(file);
            medicalRecordFileRepository.delete(file);
        } catch (Exception e) {
            logger.error("Error deleting medical record file with id: {}", fileId, e);
            throw new FileStorageException("Error deleting file: " + fileId, e);
        }
    }
}
