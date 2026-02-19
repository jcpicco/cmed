/**
 * Modelos para el sistema de archivos de CMED
 * Actualizados para coincidir con el backend Spring Boot
 */

export interface BaseFile {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string;           // UUID.extension (ej: 550e8400-e29b-41d4-a716-446655440000.pdf)
  originalName: string;       // Nombre original del archivo
  fileExtension: string;      // pdf, jpg, png, etc.
  fileSize: number;           // Tamaño en bytes
  category: FileCategory;     // Categoría determinada automáticamente por MIME type
}

export interface MedicalRecordFile extends BaseFile {
  medicalRecordId: string;
}

export interface PreviousRecordFile extends BaseFile {
  previousRecordId: string;
}

export enum FileCategory {
  DOCUMENT = 'DOCUMENT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

/**
 * DTO para crear un archivo de registro médico
 */
export interface CreateMedicalRecordFileDto {
  file: File;
  medicalRecordId: string;
}

/**
 * DTO para crear un archivo de registro previo
 */
export interface CreatePreviousRecordFileDto {
  file: File;
  previousRecordId: string;
}
