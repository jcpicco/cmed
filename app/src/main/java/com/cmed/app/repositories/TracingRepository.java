package com.medcentermanager.app.repositories;

import com.medcentermanager.app.models.Tracing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TracingRepository extends JpaRepository<Tracing, UUID> {
    List<Tracing> findAllByMedicalRecordId(UUID medicalRecordId);
}
