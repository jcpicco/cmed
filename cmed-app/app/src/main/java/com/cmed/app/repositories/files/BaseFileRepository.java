package com.cmed.app.repositories.files;

import com.cmed.app.enums.FileCategory;
import com.cmed.app.models.files.BaseFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.UUID;

@NoRepositoryBean
public interface BaseFileRepository<T extends BaseFile> extends JpaRepository<T, UUID> {
    List<T> findByCategory(FileCategory category);
}