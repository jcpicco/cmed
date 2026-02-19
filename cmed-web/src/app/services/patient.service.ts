import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PatientListDto, PatientDto, PatientCreateDto, PatientUpdateDto } from '../models/patient.model';
import { MedicalRecordListDto } from '../models/medical-record.model';
import { PreviousRecordListDto } from '../models/previous-record.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = `${environment.apiUrl}/patients`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los pacientes
   */
  getAllPatients(): Observable<PatientListDto[]> {
    return this.http.get<PatientListDto[]>(this.apiUrl);
  }

  /**
   * Obtener un paciente por ID
   */
  getPatientById(patientId: string): Observable<PatientDto> {
    return this.http.get<PatientDto>(`${this.apiUrl}/${patientId}`);
  }

  /**
   * Crear un nuevo paciente
   */
  createPatient(patient: PatientCreateDto): Observable<PatientDto> {
    return this.http.post<PatientDto>(this.apiUrl, patient);
  }

  /**
   * Actualizar un paciente
   */
  updatePatient(patientId: string, patient: PatientUpdateDto): Observable<PatientDto> {
    return this.http.patch<PatientDto>(`${this.apiUrl}/${patientId}`, patient);
  }

  /**
   * Eliminar un paciente
   */
  deletePatient(patientId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${patientId}`);
  }

  /**
   * Obtener todos los registros médicos de un paciente
   */
  getMedicalRecordsByPatientId(patientId: string): Observable<MedicalRecordListDto[]> {
    return this.http.get<MedicalRecordListDto[]>(`${this.apiUrl}/${patientId}/medicalRecords`);
  }

  /**
   * Obtener todos los registros previos de un paciente
   */
  getPreviousRecordsByPatientId(patientId: string): Observable<PreviousRecordListDto[]> {
    return this.http.get<PreviousRecordListDto[]>(`${this.apiUrl}/${patientId}/previousRecords`);
  }
}
