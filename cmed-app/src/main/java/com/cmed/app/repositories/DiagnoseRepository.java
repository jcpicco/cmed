package com.cmed.app.repositories;

import com.cmed.app.models.Diagnose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface DiagnoseRepository extends JpaRepository<Diagnose, UUID> {}