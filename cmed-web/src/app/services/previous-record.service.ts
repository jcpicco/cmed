import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PreviousRecordListDto, PreviousRecordDto, PreviousRecordCreateDto, PreviousRecordUpdateDto } from '../models/previous-record.model';

@Injectable({
  providedIn: 'root'
})
export class PreviousRecordService {
  private apiUrl = `${environment.apiUrl}/previousRecords`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los registros previos
   */
  getAllPreviousRecords(): Observable<PreviousRecordListDto[]> {
    return this.http.get<PreviousRecordListDto[]>(this.apiUrl);
  }

  /**
   * Obtener un registro previo por ID
   */
  getPreviousRecordById(previousRecordId: string): Observable<PreviousRecordDto> {
    return this.http.get<PreviousRecordDto>(`${this.apiUrl}/${previousRecordId}`);
  }

  /**
   * Crear un nuevo registro previo
   */
  createPreviousRecord(previousRecord: PreviousRecordCreateDto): Observable<PreviousRecordDto> {
    return this.http.post<PreviousRecordDto>(this.apiUrl, previousRecord);
  }

  /**
   * Actualizar un registro previo
   */
  updatePreviousRecord(previousRecordId: string, previousRecord: PreviousRecordUpdateDto): Observable<PreviousRecordDto> {
    return this.http.patch<PreviousRecordDto>(`${this.apiUrl}/${previousRecordId}`, previousRecord);
  }

  /**
   * Eliminar un registro previo
   */
  deletePreviousRecord(previousRecordId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${previousRecordId}`);
  }
}
