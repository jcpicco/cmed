import { Note } from './note.model';

export interface PatientListDto {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  birthDate: Date;
  createdAt: Date;
  notes?: Note[];
  allergies?: string;
}

export interface PatientDto extends PatientListDto {
  phone?: string;
}

export interface PatientCreateDto {
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  birthDate: string | Date;
  allergies?: string;
}

export interface PatientUpdateDto {
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dni?: string;
  birthDate?: string | Date;
  allergies?: string;
}
