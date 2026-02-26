package com.cmed.app.repositories.files;

import com.cmed.app.models.files.MedicalRecordFile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MedicalRecordFileRepository extends BaseFileRepository<MedicalRecordFile> {

    @Query("SELECT mrf FROM MedicalRecordFile mrf WHERE mrf.medicalRecord.id = :medicalRecordId")
    List<MedicalRecordFile> findByMedicalRecordId(UUID medicalRecordId);
}
