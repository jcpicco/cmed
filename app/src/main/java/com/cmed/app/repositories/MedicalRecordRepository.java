package com.medcentermanager.app.repositories;

import com.medcentermanager.app.dtos.medicalRecords.MedicalRecordListDto;
import com.medcentermanager.app.models.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, UUID> {
    List<MedicalRecord> findAllByPatientId(UUID patientId);
}