import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Note, NoteCreateDto, NoteUpdateDto } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = `${environment.apiUrl}/notes`;

  constructor(private http: HttpClient) { }

  /**
   * Obtener todas las notas
   */
  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  /**
   * Obtener una nota por ID
   */
  getNoteById(noteId: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${noteId}`);
  }

  /**
   * Crear una nota para un historial médico
   */
  createMedicalRecordNote(medicalRecordId: string, note: NoteCreateDto): Observable<Note> {
    return this.http.post<Note>(`${environment.apiUrl}/medicalRecords/${medicalRecordId}/notes`, note);
  }

  /**
   * Crear una nota para un paciente
   */
  createPatientNote(patientId: string, note: NoteCreateDto): Observable<Note> {
    return this.http.post<Note>(`${environment.apiUrl}/patients/${patientId}/notes`, note);
  }

  /**
   * Obtener todas las notas de un paciente
   */
  getPatientNotes(patientId: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiUrl}/patients/${patientId}/notes`);
  }

  /**
   * Actualizar una nota de historial médico
   */
  updateMedicalRecordNote(medicalRecordId: string, noteId: string, note: NoteUpdateDto): Observable<Note> {
    return this.http.patch<Note>(`${environment.apiUrl}/medicalRecords/${medicalRecordId}/notes/${noteId}`, note);
  }

  /**
   * Actualizar una nota de paciente
   */
  updatePatientNote(patientId: string, noteId: string, note: NoteUpdateDto): Observable<Note> {
    return this.http.patch<Note>(`${environment.apiUrl}/patients/${patientId}/notes/${noteId}`, note);
  }

  /**
   * Eliminar una nota de historial médico
   */
  deleteMedicalRecordNote(medicalRecordId: string, noteId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/medicalRecords/${medicalRecordId}/notes/${noteId}`);
  }

  /**
   * Eliminar una nota de paciente
   */
  deletePatientNote(patientId: string, noteId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/patients/${patientId}/notes/${noteId}`);
  }
}
