package com.cmed.app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "diagnoses")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Diagnose {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "medical_record_id", nullable = false, updatable = false)
    @JsonBackReference
    private MedicalRecord medicalRecord;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(length = 255)
    private String prescription;

    @Column(length = 1000)
    private String protocol;
}
