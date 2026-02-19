import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PatientService } from '../services/patient.service';
import { MedicalRecordService } from '../services/medical-record.service';
import { PatientListDto, PatientCreateDto } from '../models/patient.model';
import { MedicalRecordListDto } from '../models/medical-record.model';

/**
 * Componente de ejemplo que muestra cómo usar los servicios
 * Esto es solo una referencia de implementación
 */
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnDestroy {
  patients: PatientListDto[] = [];
  selectedPatient: PatientListDto | null = null;
  medicalRecords: MedicalRecordListDto[] = [];
  loading = false;
  error: string | null = null;

  // Para controlar las suscripciones
  private destroy$ = new Subject<void>();

  constructor(
    private patientService: PatientService,
    private medicalRecordService: MedicalRecordService
  ) {}

  ngOnInit() {
    this.loadPatients();
  }

  /**
   * Cargar todos los pacientes
   */
  loadPatients() {
    this.loading = true;
    this.error = null;

    this.patientService
      .getAllPatients()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          this.patients = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error al cargar pacientes:', error);
          this.error = 'Error al cargar los pacientes';
          this.loading = false;
        }
      );
  }

  /**
   * Seleccionar un paciente y cargar sus registros médicos
   */
  selectPatient(patient: PatientListDto) {
    this.selectedPatient = patient;
    this.loadMedicalRecords(patient.id);
  }

  /**
   * Cargar registros médicos de un paciente
   */
  loadMedicalRecords(patientId: string) {
    this.loading = true;
    this.error = null;

    this.patientService
      .getMedicalRecordsByPatientId(patientId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          this.medicalRecords = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error al cargar registros médicos:', error);
          this.error = 'Error al cargar los registros médicos';
          this.loading = false;
        }
      );
  }

  /**
   * Ejemplo de crear un nuevo paciente
   */
  createNewPatient() {
    const newPatient: PatientCreateDto = {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: '12345678A',
      email: 'juan@example.com',
      phone: '666123456',
      address: 'Calle Principal 123'
    };

    this.patientService
      .createPatient(newPatient)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (created) => {
          console.log('Paciente creado:', created);
          this.loadPatients(); // Recargar la lista
        },
        (error) => {
          console.error('Error al crear paciente:', error);
          this.error = 'Error al crear el paciente';
        }
      );
  }

  /**
   * Ejemplo de eliminar un paciente
   */
  deletePatient(patientId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
      this.patientService
        .deletePatient(patientId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          () => {
            console.log('Paciente eliminado');
            this.loadPatients(); // Recargar la lista
          },
          (error) => {
            console.error('Error al eliminar paciente:', error);
            this.error = 'Error al eliminar el paciente';
          }
        );
    }
  }

  /**
   * Limpiar suscripciones
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
