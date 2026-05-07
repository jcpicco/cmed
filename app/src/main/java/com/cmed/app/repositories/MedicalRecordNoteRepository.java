package com.medcentermanager.app.repositories;

import com.medcentermanager.app.models.notes.MedicalRecordNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import java.util.UUID;

@Repository
public interface MedicalRecordNoteRepository extends JpaRepository<MedicalRecordNote, UUID> {
    List<MedicalRecordNote> findAllByMedicalRecordId(UUID medicalRecordId);
}
