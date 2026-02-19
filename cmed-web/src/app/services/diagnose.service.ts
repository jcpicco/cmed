import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Diagnose, DiagnoseCreateDto, DiagnoseUpdateDto } from '../models/diagnose.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {
  private apiUrl = `${environment.apiUrl}/diagnoses`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los diagnósticos
   */
  getAllDiagnoses(): Observable<Diagnose[]> {
    return this.http.get<Diagnose[]>(this.apiUrl);
  }

  /**
   * Obtener un diagnóstico por ID
   */
  getDiagnoseById(diagnoseId: string): Observable<Diagnose> {
    return this.http.get<Diagnose>(`${this.apiUrl}/${diagnoseId}`);
  }

  /**
   * Crear un nuevo diagnóstico
   */
  createDiagnose(diagnose: DiagnoseCreateDto): Observable<Diagnose> {
    return this.http.post<Diagnose>(this.apiUrl, diagnose);
  }

  /**
   * Actualizar un diagnóstico
   */
  updateDiagnose(diagnoseId: string, diagnose: DiagnoseUpdateDto): Observable<Diagnose> {
    return this.http.patch<Diagnose>(`${this.apiUrl}/${diagnoseId}`, diagnose);
  }

  /**
   * Eliminar un diagnóstico
   */
  deleteDiagnose(diagnoseId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${diagnoseId}`);
  }
}
