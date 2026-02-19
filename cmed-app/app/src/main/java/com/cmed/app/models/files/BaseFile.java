package com.cmed.app.models.files;

import com.cmed.app.enums.FileCategory;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;
import java.nio.file.Path;
import java.nio.file.Paths;

@Entity
@Getter
@Setter
@Table(name = "base_files")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "entity_type", discriminatorType = DiscriminatorType.STRING)
public abstract class BaseFile {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "category", nullable = false, updatable = false)
    private FileCategory category;

    @Column(name = "file_name", nullable = false)
    private String fileName;

    @Column(name = "original_name", nullable = false)
    private String originalName;

    @Column(name = "file_extension", nullable = false)
    private String fileExtension;

    @Column(name = "file_size")
    private Long fileSize;

    @Transient
    private static final String BASE_STORAGE_PATH = System.getProperty("user.home") + "/cmed-files";

    public String getStoragePath() {
        return BASE_STORAGE_PATH + "/" + category.toString().toLowerCase() + "/" + fileName;
    }

    public Path getAbsolutePath() {
        return Paths.get(getStoragePath());
    }

    public void initializeFileDetails(String originalFileName) {
        this.originalName = originalFileName;
        this.fileExtension = getFileExtension(originalFileName);
        this.fileName = generateFileName();
    }

    private String getFileExtension(String filename) {
        return filename.substring(filename.lastIndexOf(".") + 1);
    }

    private String generateFileName() {
        return id.toString() + "." + fileExtension;
    }
}
