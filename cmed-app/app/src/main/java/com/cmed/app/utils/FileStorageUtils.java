package com.cmed.app.utils;

import com.cmed.app.enums.FileCategory;
import com.cmed.app.exceptions.FileStorageException;
import com.cmed.app.models.files.BaseFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Component
public class FileStorageUtils {
    private static final Logger logger = LoggerFactory.getLogger(FileStorageUtils.class);

    private final String baseStoragePath;

    public FileStorageUtils(@Value("${file.storage.path}") String baseStoragePath) {
        this.baseStoragePath = baseStoragePath;
        logger.info("FileStorageUtils initialized with base path: {}", baseStoragePath);
    }

    @PostConstruct
    public void initializeStorageDirectory() {
        try {
            Path basePath = Paths.get(baseStoragePath);

            if (!Files.exists(basePath)) {
                logger.info("Creating file storage directories at: {}", baseStoragePath);
                Files.createDirectories(basePath);
                logger.info("Successfully created base storage directory: {}", baseStoragePath);
            } else {
                logger.info("File storage directory already exists: {}", baseStoragePath);
            }

            // Create category subdirectories
            for (FileCategory category : FileCategory.values()) {
                Path categoryPath = basePath.resolve(category.toString().toLowerCase());
                if (!Files.exists(categoryPath)) {
                    Files.createDirectories(categoryPath);
                    logger.info("Created category subdirectory: {}", categoryPath);
                }
            }

            // Check write permissions
            if (!Files.isWritable(basePath)) {
                logger.warn("File storage directory is not writable: {}", baseStoragePath);
            } else {
                logger.info("File storage directory is writable");
            }
        } catch (IOException ex) {
            logger.error("Error initializing file storage directories", ex);
            throw new FileStorageException("Failed to initialize file storage directories", ex);
        }
    }

    public void storeFile(MultipartFile file, BaseFile baseFile) {
        try {
            logger.debug("Attempting to store file: originalName={}, size={} bytes, contentType={}",
                    file.getOriginalFilename(), file.getSize(), file.getContentType());

            String fileName = UUID.randomUUID() + "." + getFileExtension(file.getOriginalFilename());
            FileCategory category = determineFileCategory(file.getContentType());
            Path targetLocation = getTargetLocation(fileName, category);

            logger.debug("Target location: {}, Category: {}", targetLocation, category);

            Files.createDirectories(targetLocation.getParent());
            logger.debug("Directory structure created for: {}", targetLocation.getParent());

            logger.info("Storing file at location: {}", targetLocation);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            logger.info("File successfully stored: {}", fileName);

            baseFile.setFileName(fileName);
            baseFile.setOriginalName(file.getOriginalFilename());
            baseFile.setFileSize(file.getSize());
            baseFile.setFileExtension(getFileExtension(file.getOriginalFilename()).substring(1));
            baseFile.setCategory(category);

        } catch (IOException ex) {
            logger.error("IO error while storing file: originalName={}, baseStoragePath={}, message={}",
                    file.getOriginalFilename(), baseStoragePath, ex.getMessage(), ex);
            throw new FileStorageException("Error storing file: " + file.getOriginalFilename(), ex);
        }
    }

    public void deleteFile(BaseFile file) {
        try {
            Path filePath = getTargetLocation(file.getFileName(), file.getCategory());
            logger.info("Deleting file at location: {}", filePath);
            boolean deleted = Files.deleteIfExists(filePath);
            if (deleted) {
                logger.info("File successfully deleted: {}", file.getFileName());
            } else {
                logger.warn("File does not exist at location: {}", filePath);
            }
        } catch (IOException ex) {
            logger.error("IO error while deleting file: fileName={}, category={}, message={}",
                    file.getFileName(), file.getCategory(), ex.getMessage(), ex);
            throw new FileStorageException("Error deleting file: " + file.getFileName(), ex);
        }
    }

    private Path getTargetLocation(String fileName, FileCategory category) {
        return Paths.get(baseStoragePath)
                .resolve(category.toString().toLowerCase())
                .resolve(fileName)
                .normalize();
    }

    private String getFileExtension(String fileName) {
        if (fileName == null || fileName.lastIndexOf(".") == -1) {
            return ".tmp";
        }
        return fileName.substring(fileName.lastIndexOf("."));
    }

    private FileCategory determineFileCategory(String contentType) {
        if (contentType == null) return FileCategory.DOCUMENT;

        if (contentType.startsWith("image/")) {
            return FileCategory.IMAGE;
        } else if (contentType.startsWith("video/")) {
            return FileCategory.VIDEO;
        }
        return FileCategory.DOCUMENT;
    }
}
