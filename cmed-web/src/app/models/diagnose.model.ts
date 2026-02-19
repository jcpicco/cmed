export interface Diagnose {
  id: string;
  medicalRecordId: string;
  description: string;
  prescription?: string;
  protocol?: string;
  createdAt: Date;
}

export interface DiagnoseCreateDto {
  medicalRecordId: string;
  description: string;
  prescription?: string;
  protocol?: string;
}

export interface DiagnoseUpdateDto {
  description?: string;
  prescription?: string;
  protocol?: string;
}
