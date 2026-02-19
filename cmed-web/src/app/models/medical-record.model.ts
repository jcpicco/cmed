import { Diagnose } from './diagnose.model';
import { Note } from './note.model';

export interface MedicalRecordListDto {
  id: string;
  patientId: string;
  description: string;
  createdAt: Date;
}

export interface MedicalRecordDto extends MedicalRecordListDto {
  notes: Note[];
  diagnoses: Diagnose[];
  files?: any[];
}

export interface MedicalRecordCreateDto {
  patientId: string;
  description: string;
}

export interface MedicalRecordUpdateDto {
  description?: string;
}
