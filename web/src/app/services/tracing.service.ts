import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tracing, TracingCreateDto, TracingUpdateDto } from '../models/tracing.model';

@Injectable({
    providedIn: 'root'
})
export class TracingService {
    constructor(private http: HttpClient) { }

    /**
     * Obtener todos los seguimientos de un historial médico
     */
    getTracingsByMedicalRecordId(medicalRecordId: string): Observable<Tracing[]> {
        return this.http.get<Tracing[]>(`${environment.apiUrl}/medical-records/${medicalRecordId}/tracings`);
    }

    /**
     * Crear un seguimiento para un historial médico
     */
    createTracing(medicalRecordId: string, tracing: TracingCreateDto): Observable<Tracing> {
        return this.http.post<Tracing>(`${environment.apiUrl}/medical-records/${medicalRecordId}/tracings`, tracing);
    }

    /**
     * Actualizar un seguimiento de historial médico
     */
    updateTracing(medicalRecordId: string, tracingId: string, tracing: TracingUpdateDto): Observable<Tracing> {
        return this.http.patch<Tracing>(`${environment.apiUrl}/medical-records/${medicalRecordId}/tracings/${tracingId}`, tracing);
    }

    /**
     * Eliminar un seguimiento de historial médico
     */
    deleteTracing(medicalRecordId: string, tracingId: string): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/medical-records/${medicalRecordId}/tracings/${tracingId}`);
    }
}
