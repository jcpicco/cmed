import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseFile, FileCategory, EntityType } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = `${environment.apiUrl}/files`;

  constructor(private http: HttpClient) {}

  /**
   * Subir un archivo
   */
  uploadFile(
    file: File,
    entityType: EntityType,
    category: FileCategory,
    medicalRecordId?: string,
    previousRecordId?: string
  ): Observable<BaseFile> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('entity_type', entityType);
    formData.append('category', category);

    if (medicalRecordId) {
      formData.append('medicalRecordId', medicalRecordId);
    }

    if (previousRecordId) {
      formData.append('previousRecordId', previousRecordId);
    }

    return this.http.post<BaseFile>(this.apiUrl, formData);
  }

  /**
   * Eliminar un archivo
   */
  deleteFile(fileId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${fileId}`);
  }
}
