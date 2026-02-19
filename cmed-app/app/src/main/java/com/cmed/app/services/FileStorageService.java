package com.cmed.app.services;

import com.cmed.app.exceptions.FileStorageException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.beans.factory.annotation.Value;

@Service
public class FileStorageService {
    private final Path fileStorageLocation;

    public FileStorageService(@Value("${file.storage.path}") String fileStoragePath) {
        this.fileStorageLocation = Paths.get(fileStoragePath)
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (IOException ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public String storeFile(MultipartFile file, String fileName) {
        try {
            if (file == null || file.isEmpty() || fileName == null) {
                throw new FileStorageException("Failed to store empty or null file.");
            }

            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return targetLocation.toString();
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public void deleteFile(String filePath) {
        try {
            Path targetLocation = Paths.get(filePath);
            Files.deleteIfExists(targetLocation);
        } catch (IOException ex) {
            throw new FileStorageException("Could not delete file " + filePath + ". Please try again!", ex);
        }
    }
}
