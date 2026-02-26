package com.cmed.app.repositories;

import com.cmed.app.dtos.medicalRecords.MedicalRecordListDto;
import com.cmed.app.models.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, UUID> {
    List<MedicalRecord> findAllByPatientId(UUID patientId);
}