export interface Tracing {
    id: string;
    medicalRecordId?: string;
    description: string;
    createdAt: Date;
}

export interface TracingCreateDto {
    description: string;
}

export interface TracingUpdateDto {
    description?: string;
}
