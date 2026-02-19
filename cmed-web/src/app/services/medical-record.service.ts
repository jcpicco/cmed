import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MedicalRecordListDto, MedicalRecordDto, MedicalRecordCreateDto, MedicalRecordUpdateDto } from '../models/medical-record.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private apiUrl = `${environment.apiUrl}/medicalRecords`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los registros médicos
   */
  getAllMedicalRecords(): Observable<MedicalRecordListDto[]> {
    return this.http.get<MedicalRecordListDto[]>(this.apiUrl);
  }

  /**
   * Obtener un registro médico por ID
   */
  getMedicalRecordById(medicalRecordId: string): Observable<MedicalRecordDto> {
    return this.http.get<MedicalRecordDto>(`${this.apiUrl}/${medicalRecordId}`);
  }

  /**
   * Crear un nuevo registro médico
   */
  createMedicalRecord(medicalRecord: MedicalRecordCreateDto): Observable<MedicalRecordDto> {
    return this.http.post<MedicalRecordDto>(this.apiUrl, medicalRecord);
  }

  /**
   * Actualizar un registro médico
   */
  updateMedicalRecord(medicalRecordId: string, medicalRecord: MedicalRecordUpdateDto): Observable<MedicalRecordDto> {
    return this.http.patch<MedicalRecordDto>(`${this.apiUrl}/${medicalRecordId}`, medicalRecord);
  }

  /**
   * Eliminar un registro médico
   */
  deleteMedicalRecord(medicalRecordId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${medicalRecordId}`);
  }
}
