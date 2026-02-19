export interface Note {
  id: string;
  medicalRecordId?: string;
  patientId?: string;
  description: string;
  createdAt: Date;
}

export interface NoteCreateDto {
  medicalRecordId?: string;
  patientId?: string;
  description: string;
}

export interface NoteUpdateDto {
  description?: string;
}
