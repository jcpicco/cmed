export interface PreviousRecordListDto {
  id: string;
  patientId: string;
  description: string;
  createdAt: Date;
}

export interface PreviousRecordDto extends PreviousRecordListDto {
  files?: any[];
}

export interface PreviousRecordCreateDto {
  patientId: string;
  description: string;
}

export interface PreviousRecordUpdateDto {
  description?: string;
}
