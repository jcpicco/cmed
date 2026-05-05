package com.medcentermanager.app.repositories;

import com.medcentermanager.app.models.PreviousRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PreviousRecordRepository extends JpaRepository<PreviousRecord, UUID> {
    List<PreviousRecord> findAllByPatientId(UUID patientId);
}