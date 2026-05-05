package com.medcentermanager.app.models.notes;

import com.medcentermanager.app.models.MedicalRecord;
import com.medcentermanager.app.models.Note;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue("MEDICAL_RECORD")
public class MedicalRecordNote extends Note {
    @ManyToOne
    @JoinColumn(name = "medical_record_id", updatable = false)
    @JsonBackReference
    private MedicalRecord medicalRecord;
}
