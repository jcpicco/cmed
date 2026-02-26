package com.cmed.app.models.files;

import com.cmed.app.models.MedicalRecord;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@DiscriminatorValue("MEDICAL_RECORD")
public class MedicalRecordFile extends BaseFile {
    @ManyToOne
    @JoinColumn(name = "medical_record_id", updatable = false)
    private MedicalRecord medicalRecord;
}

