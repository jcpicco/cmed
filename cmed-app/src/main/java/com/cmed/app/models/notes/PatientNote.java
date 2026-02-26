package com.cmed.app.models.notes;

import com.cmed.app.models.Patient;
import com.cmed.app.models.Note;
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
@DiscriminatorValue("PATIENT")
public class PatientNote extends Note {
    @ManyToOne
    @JoinColumn(name = "patient_id", updatable = false)
    @JsonBackReference
    private Patient patient;
}
