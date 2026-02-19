import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PreviousRecordFile } from '../models/file.model';

/**
 * Servicio para gestionar archivos de registros previos
 * Endpoints: /api/previousRecords/{previousRecordId}/files
 */
@Injectable({
    providedIn: 'root'
})
export class PreviousRecordFileService {

    constructor(private http: HttpClient) { }

    /**
     * Obtener todos los archivos de un registro previo
     */
    getAllByPreviousRecordId(previousRecordId: string): Observable<PreviousRecordFile[]> {
        return this.http.get<PreviousRecordFile[]>(
            `${environment.apiUrl}/previousRecords/${previousRecordId}/files`
        );
    }

    /**
     * Subir un archivo a un registro previo
     */
    uploadFile(previousRecordId: string, file: File): Observable<PreviousRecordFile> {
        const formData = new FormData();
        formData.append('file', file);

        return this.http.post<PreviousRecordFile>(
            `${environment.apiUrl}/previousRecords/${previousRecordId}/files`,
            formData
        );
    }

    /**
     * Eliminar un archivo de un registro previo
     */
    deleteFile(previousRecordId: string, fileId: string): Observable<void> {
        return this.http.delete<void>(
            `${environment.apiUrl}/previousRecords/${previousRecordId}/files/${fileId}`
        );
    }
}
