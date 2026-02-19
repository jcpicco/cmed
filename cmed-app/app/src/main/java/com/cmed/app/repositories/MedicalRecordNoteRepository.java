package com.cmed.app.repositories;

import com.cmed.app.models.notes.MedicalRecordNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import java.util.UUID;

@Repository
public interface MedicalRecordNoteRepository extends JpaRepository<MedicalRecordNote, UUID> {
    List<MedicalRecordNote> findAllByMedicalRecordId(UUID medicalRecordId);
}
