package com.medcentermanager.app.repositories.files;

import com.medcentermanager.app.enums.FileCategory;
import com.medcentermanager.app.models.files.BaseFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.UUID;

@NoRepositoryBean
public interface BaseFileRepository<T extends BaseFile> extends JpaRepository<T, UUID> {
    List<T> findByCategory(FileCategory category);
}