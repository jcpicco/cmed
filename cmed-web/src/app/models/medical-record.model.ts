import { Note } from './note.model';
import { Tracing } from './tracing.model';

export interface MedicalRecordListDto {
  id: string;
  patientId: string;
  description: string;
  background?: string;
  createdAt: Date;
  diagnose?: string;
  protocol?: string;
  prescription?: string;
}

export interface MedicalRecordDto extends MedicalRecordListDto {
  notes: Note[];
  tracings?: Tracing[];
  files?: any[];
}

export interface MedicalRecordCreateDto {
  patientId: string;
  description: string;
  background?: string;
  diagnose?: string;
  protocol?: string;
  prescription?: string;
}

export interface MedicalRecordUpdateDto {
  description?: string;
  background?: string;
  diagnose?: string;
  protocol?: string;
  prescription?: string;
}
