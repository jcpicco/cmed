package com.cmed.app.services;

import com.cmed.app.dtos.patients.PatientCreateDto;
import com.cmed.app.dtos.patients.PatientDto;
import com.cmed.app.dtos.patients.PatientListDto;
import com.cmed.app.dtos.patients.PatientUpdateDto;
import com.cmed.app.exceptions.PatientNotFoundException;
import com.cmed.app.mappers.patients.PatientCreateDtoMapper;
import com.cmed.app.mappers.patients.PatientDtoMapper;
import com.cmed.app.mappers.patients.PatientListDtoMapper;
import com.cmed.app.mappers.patients.PatientUpdateDtoMapper;
import com.cmed.app.models.Patient;
import com.cmed.app.repositories.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;
    private final PatientDtoMapper patientDtoMapper;
    private final PatientListDtoMapper patientListDtoMapper;
    private final PatientCreateDtoMapper patientCreateDtoMapper;
    private final PatientUpdateDtoMapper patientUpdateDtoMapper;

    private static final String PATIENT_NOT_FOUND = "Patient not found: ";

    public List<PatientListDto> getAll() {
        List<Patient> patients = patientRepository.findAll();

        return patients.stream().map(patientListDtoMapper::toDto).toList();
    }

    public PatientDto getById(UUID id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND + id));

        return patientDtoMapper.toDto(patient);
    }

    public PatientDto create(final PatientCreateDto toCreatePatient) {
        Patient patient = patientCreateDtoMapper.toEntity(toCreatePatient);

        patientRepository.save(patient);

        return patientDtoMapper.toDto(patient);
    }

    public PatientDto update(UUID id, PatientUpdateDto toUpdatePatient) {
        return patientRepository.findById(id).map(patient -> {
            if (toUpdatePatient.getEmail() != null) {
                patient.setEmail(toUpdatePatient.getEmail());
            }
            if (toUpdatePatient.getName() != null) {
                patient.setName(toUpdatePatient.getName());
            }
            if (toUpdatePatient.getLastName() != null) {
                patient.setLastName(toUpdatePatient.getLastName());
            }
            if (toUpdatePatient.getPhone() != null) {
                patient.setPhone(toUpdatePatient.getPhone());
            }
            if (toUpdatePatient.getDni() != null) {
                patient.setDni(toUpdatePatient.getDni());
            }
            if (toUpdatePatient.getBirthDate() != null) {
                patient.setBirthDate(toUpdatePatient.getBirthDate());
            }
            if (toUpdatePatient.getAllergies() != null) {
                patient.setAllergies(toUpdatePatient.getAllergies());
            }

            Patient updatedPatient = patientRepository.save(patient);
            return patientDtoMapper.toDto(updatedPatient);
        }).orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND + id));
    }

    public void delete(UUID id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException(PATIENT_NOT_FOUND + id));

        patientRepository.delete(patient);
    }
}
