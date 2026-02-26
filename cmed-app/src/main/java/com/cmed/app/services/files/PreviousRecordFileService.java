package com.cmed.app.services.files;

import com.cmed.app.dtos.files.CreatePreviousRecordFileDto;
import com.cmed.app.dtos.files.PreviousRecordFileDto;
import com.cmed.app.exceptions.FileStorageException;
import com.cmed.app.exceptions.PreviousRecordFileNotFoundException;
import com.cmed.app.exceptions.PreviousRecordNotFoundException;
import com.cmed.app.mappers.files.PreviousRecordFileMapper;
import com.cmed.app.models.PreviousRecord;
import com.cmed.app.models.files.PreviousRecordFile;
import com.cmed.app.repositories.PreviousRecordRepository;
import com.cmed.app.repositories.files.PreviousRecordFileRepository;
import com.cmed.app.utils.FileStorageUtils;
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
public class PreviousRecordFileService {
    private static final Logger logger = LoggerFactory.getLogger(PreviousRecordFileService.class);

    private final PreviousRecordFileRepository previousRecordFileRepository;
    private final PreviousRecordRepository previousRecordRepository;
    private final FileStorageUtils fileStorageUtils;
    private final PreviousRecordFileMapper previousRecordFileMapper;

    @Value("${file.storage.path}")
    private String baseStoragePath;

    private static final String PREVIOUS_RECORD_NOT_FOUND = "Previous Record not found with id: ";
    private static final String FILE_NOT_FOUND = "Previous Record File not found with id: ";

    public List<PreviousRecordFileDto> getAllByPreviousRecordId(UUID previousRecordId) {
        return previousRecordFileRepository.findByPreviousRecordId(previousRecordId)
                .stream()
                .map(previousRecordFileMapper::toDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public PreviousRecordFileDto create(CreatePreviousRecordFileDto createDto) {
        PreviousRecord previousRecord = previousRecordRepository
                .findById(UUID.fromString(createDto.getPreviousRecordId()))
                .orElseThrow(() -> new PreviousRecordNotFoundException(
                        PREVIOUS_RECORD_NOT_FOUND + createDto.getPreviousRecordId()));

        PreviousRecordFile file = previousRecordFileMapper.toEntity(createDto);
        file.setPreviousRecord(previousRecord);

        try {
            fileStorageUtils.storeFile(createDto.getFile(), file);

            file = previousRecordFileRepository.save(file);

            logger.info("Previous record file created successfully: id={}, originalName={}, size={}",
                    file.getId(), file.getOriginalName(), file.getFileSize());
            return previousRecordFileMapper.toDto(file);
        } catch (Exception e) {
            logger.error("Error creating previous record file for record id: {}", createDto.getPreviousRecordId(), e);
            throw new FileStorageException(
                    "Error creating file for previous record: " + createDto.getPreviousRecordId(), e);
        }
    }

    public byte[] getFileContent(UUID fileId) {
        PreviousRecordFile file = previousRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new PreviousRecordFileNotFoundException(FILE_NOT_FOUND + fileId));

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

    public PreviousRecordFileDto getFileById(UUID fileId) {
        PreviousRecordFile file = previousRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new PreviousRecordFileNotFoundException(FILE_NOT_FOUND + fileId));
        return previousRecordFileMapper.toDto(file);
    }

    @Transactional
    public void delete(UUID fileId) {
        PreviousRecordFile file = previousRecordFileRepository.findById(fileId)
                .orElseThrow(() -> new PreviousRecordFileNotFoundException(FILE_NOT_FOUND + fileId));

        try {
            fileStorageUtils.deleteFile(file);
            previousRecordFileRepository.delete(file);
        } catch (Exception e) {
            logger.error("Error deleting previous record file with id: {}", fileId, e);
            throw new FileStorageException("Error deleting file: " + fileId, e);
        }
    }
}
