import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MedicalRecordFile } from '../models/file.model';

/**
 * Servicio para gestionar archivos de registros médicos
 * Endpoints: /api/medicalRecords/{medicalRecordId}/files
 */
@Injectable({
    providedIn: 'root'
})
export class MedicalRecordFileService {

    constructor(private http: HttpClient) { }

    /**
     * Obtener todos los archivos de un registro médico
     */
    getAllByMedicalRecordId(medicalRecordId: string): Observable<MedicalRecordFile[]> {
        return this.http.get<MedicalRecordFile[]>(
            `${environment.apiUrl}/medicalRecords/${medicalRecordId}/files`
        );
    }

    /**
     * Subir un archivo a un registro médico
     */
    uploadFile(medicalRecordId: string, file: File): Observable<MedicalRecordFile> {
        const formData = new FormData();
        formData.append('file', file);

        return this.http.post<MedicalRecordFile>(
            `${environment.apiUrl}/medicalRecords/${medicalRecordId}/files`,
            formData
        );
    }

    /**
     * Eliminar un archivo de un registro médico
     */
    deleteFile(medicalRecordId: string, fileId: string): Observable<void> {
        return this.http.delete<void>(
            `${environment.apiUrl}/medicalRecords/${medicalRecordId}/files/${fileId}`
        );
    }
}
