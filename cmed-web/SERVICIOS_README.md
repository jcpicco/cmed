# Angular Services for cmed-app

This document describes the services created to consume the cmed-app backend API.

## 📁 Structure

```
src/app/
├── models/
│   ├── patient.model.ts
│   ├── medical-record.model.ts
│   ├── diagnose.model.ts
│   ├── note.model.ts
│   ├── previous-record.model.ts
│   └── file.model.ts
├── services/
│   ├── patient.service.ts
│   ├── medical-record.service.ts
│   ├── diagnose.service.ts
│   ├── note.service.ts
│   ├── previous-record.service.ts
│   └── file.service.ts
└── environments/
    ├── environment.ts
    ├── environment.prod.ts
    └── environment.interface.ts
```

## 🚀 Available Services

### 1. **PatientService**
Manages patient CRUD operations.

```typescript
import { PatientService } from './services/patient.service';

constructor(private patientService: PatientService) {}

// Get all patients
this.patientService.getAllPatients().subscribe(patients => {
  console.log(patients);
});

// Get patient by ID
this.patientService.getPatientById('patient-id').subscribe(patient => {
  console.log(patient);
});

// Create patient
const newPatient: PatientCreateDto = {
  firstName: 'John',
  lastName: 'Smith',
  dni: '12345678A',
  email: 'john@example.com'
};
this.patientService.createPatient(newPatient).subscribe(created => {
  console.log('Patient created:', created);
});

// Update patient
const updates: PatientUpdateDto = {
  email: 'newemail@example.com'
};
this.patientService.updatePatient('patient-id', updates).subscribe(updated => {
  console.log('Patient updated:', updated);
});

// Delete patient
this.patientService.deletePatient('patient-id').subscribe(() => {
  console.log('Patient deleted');
});

// Get medical records of a patient
this.patientService.getMedicalRecordsByPatientId('patient-id').subscribe(records => {
  console.log('Medical records:', records);
});

// Get previous records of a patient
this.patientService.getPreviousRecordsByPatientId('patient-id').subscribe(records => {
  console.log('Previous records:', records);
});
```

### 2. **MedicalRecordService**
Manages medical record CRUD operations.

```typescript
import { MedicalRecordService } from './services/medical-record.service';

constructor(private medicalRecordService: MedicalRecordService) {}

// Get all medical records
this.medicalRecordService.getAllMedicalRecords().subscribe(records => {
  console.log(records);
});

// Get medical record by ID (includes notes, diagnoses, files)
this.medicalRecordService.getMedicalRecordById('record-id').subscribe(record => {
  console.log(record);
});

// Create medical record
const newRecord: MedicalRecordCreateDto = {
  patientId: 'patient-id',
  description: 'Routine checkup'
};
this.medicalRecordService.createMedicalRecord(newRecord).subscribe(created => {
  console.log('Record created:', created);
});

// Update medical record
const updates: MedicalRecordUpdateDto = {
  description: 'Updated description'
};
this.medicalRecordService.updateMedicalRecord('record-id', updates).subscribe(updated => {
  console.log('Record updated:', updated);
});

// Delete medical record
this.medicalRecordService.deleteMedicalRecord('record-id').subscribe(() => {
  console.log('Record deleted');
});
```

### 3. **DiagnoseService**
Manages diagnosis CRUD operations.

```typescript
import { DiagnoseService } from './services/diagnose.service';

constructor(private diagnoseService: DiagnoseService) {}

// Get all diagnoses
this.diagnoseService.getAllDiagnoses().subscribe(diagnoses => {
  console.log(diagnoses);
});

// Get diagnosis by ID
this.diagnoseService.getDiagnoseById('diagnose-id').subscribe(diagnose => {
  console.log(diagnose);
});

// Create diagnosis
const newDiagnose: DiagnoseCreateDto = {
  medicalRecordId: 'record-id',
  description: 'Common cold',
  prescription: 'Paracetamol 500mg x 3 days'
};
this.diagnoseService.createDiagnose(newDiagnose).subscribe(created => {
  console.log('Diagnosis created:', created);
});

// Update diagnosis
const updates: DiagnoseUpdateDto = {
  description: 'Influenza type A'
};
this.diagnoseService.updateDiagnose('diagnose-id', updates).subscribe(updated => {
  console.log('Diagnosis updated:', updated);
});

// Delete diagnosis
this.diagnoseService.deleteDiagnose('diagnose-id').subscribe(() => {
  console.log('Diagnosis deleted');
});
```

### 4. **NoteService**
Manages note CRUD operations.

```typescript
import { NoteService } from './services/note.service';

constructor(private noteService: NoteService) {}

// Get all notes
this.noteService.getAllNotes().subscribe(notes => {
  console.log(notes);
});

// Get note by ID
this.noteService.getNoteById('note-id').subscribe(note => {
  console.log(note);
});

// Create note
const newNote: NoteCreateDto = {
  medicalRecordId: 'record-id',
  description: 'Patient with cold symptoms'
};
this.noteService.createNote(newNote).subscribe(created => {
  console.log('Note created:', created);
});

// Update note
const updates: NoteUpdateDto = {
  description: 'Patient improved'
};
this.noteService.updateNote('note-id', updates).subscribe(updated => {
  console.log('Note updated:', updated);
});

// Delete note
this.noteService.deleteNote('note-id').subscribe(() => {
  console.log('Note deleted');
});
```

### 5. **PreviousRecordService**
Manages previous record CRUD operations.

```typescript
import { PreviousRecordService } from './services/previous-record.service';

constructor(private previousRecordService: PreviousRecordService) {}

// Get all previous records
this.previousRecordService.getAllPreviousRecords().subscribe(records => {
  console.log(records);
});

// Get previous record by ID
this.previousRecordService.getPreviousRecordById('record-id').subscribe(record => {
  console.log(record);
});

// Create previous record
const newRecord: PreviousRecordCreateDto = {
  patientId: 'patient-id',
  description: 'Patient historical record'
};
this.previousRecordService.createPreviousRecord(newRecord).subscribe(created => {
  console.log('Previous record created:', created);
});

// Update previous record
const updates: PreviousRecordUpdateDto = {
  description: 'Updated record'
};
this.previousRecordService.updatePreviousRecord('record-id', updates).subscribe(updated => {
  console.log('Previous record updated:', updated);
});

// Delete previous record
this.previousRecordService.deletePreviousRecord('record-id').subscribe(() => {
  console.log('Previous record deleted');
});
```

### 6. **FileService**
Manages file upload and deletion.

```typescript
import { FileService } from './services/file.service';
import { FileCategory, EntityType } from './models/file.model';

constructor(private fileService: FileService) {}

// Upload file to a medical record
const file: File = /* selected file */;
this.fileService.uploadFile(
  file,
  EntityType.MEDICAL_RECORD,
  FileCategory.DOCUMENT,
  'medical-record-id'
).subscribe(uploaded => {
  console.log('File uploaded:', uploaded);
});

// Upload file to a previous record
this.fileService.uploadFile(
  file,
  EntityType.PREVIOUS_RECORD,
  FileCategory.IMAGE,
  undefined,
  'previous-record-id'
).subscribe(uploaded => {
  console.log('File uploaded:', uploaded);
});

// Delete file
this.fileService.deleteFile('file-id').subscribe(() => {
  console.log('File deleted');
});
```

## ⚙️ Environment Configuration

Services use environment variables for the API URL:

**Development** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

**Production** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.cmed.app/api'
};
```

## 📦 Models/DTOs

### PatientListDto / PatientDto
- `id`: UUID
- `firstName`: string
- `lastName`: string
- `dni`: string
- `email`: string
- `phone`: string (optional)
- `address`: string (optional)
- `createdAt`: Date

### MedicalRecordListDto / MedicalRecordDto
- `id`: UUID
- `patientId`: UUID
- `description`: string
- `notes`: Note[]
- `diagnoses`: Diagnose[]
- `files`: BaseFile[]
- `createdAt`: Date

### Diagnose
- `id`: UUID
- `medicalRecordId`: UUID
- `description`: string
- `prescription`: string (optional)
- `createdAt`: Date

### Note
- `id`: UUID
- `medicalRecordId`: UUID
- `description`: string
- `createdAt`: Date

### PreviousRecordListDto / PreviousRecordDto
- `id`: UUID
- `patientId`: UUID
- `description`: string
- `files`: BaseFile[]
- `createdAt`: Date

### BaseFile
- `id`: UUID
- `url`: string
- `extension`: string
- `category`: FileCategory
- `createdAt`: Date

## 🔧 Installing Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

The services are ready to use once you run the application.

## 📝 Usage Examples

### Create a component that uses the services

```typescript
import { Component, OnInit } from '@angular/core';
import { PatientService } from './services/patient.service';
import { PatientListDto } from './models/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: PatientListDto[] = [];
  loading = false;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.loading = true;
    this.patientService.getAllPatients().subscribe(
      (data) => {
        this.patients = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading patients:', error);
        this.loading = false;
      }
    );
  }
}
```

Done! The services are fully configured and ready to use.
