# CMED API Documentation
**Version:** 1.0.0
**Last Updated:** 19-02-2026

## 🏥 Patients

### List Patients
`GET /api/patients`
Returns a list of all patients.

### Get Patient
`GET /api/patients/{id}`
Returns the details of a specific patient, including their notes.

### Create Patient
`POST /api/patients`
Creates a new patient.

**Body (JSON):**
- `email`: (Required) string, valid email, 3-100 characters.
- `name`: (Required) string, 3-50 characters.
- `lastName`: (Required) string, 3-50 characters.
- `phone`: (Required) string, **3-20 characters**. (No format restriction)
- `dni`: (Required) string, **3-20 characters**. (No format restriction)
- `birthDate`: (Required) string (YYYY-MM-DD), past date.
- `allergies`: (Optional) string, max 255 characters.

### Update Patient
`PATCH /api/patients/{id}`
Updates the data of an existing patient.

**Body (JSON):**
- Optional fields (same restrictions as creation).

### Delete Patient
`DELETE /api/patients/{id}`
Deletes a patient.

### Patient Relations
- `GET /api/patients/{patientId}/medicalRecords`: Gets the patient's medical records.
- `GET /api/patients/{patientId}/previousRecords`: Gets the patient's previous records.

### Patient Notes
- `GET /api/patients/{patientId}/notes`: List notes.
- `POST /api/patients/{patientId}/notes`: Create note.
- `PATCH /api/patients/{patientId}/notes/{noteId}`: Update note.
- `DELETE /api/patients/{patientId}/notes/{noteId}`: Delete note.

---

## 📋 Medical Records

### List Medical Records
`GET /api/medicalRecords`

### Get Medical Record
`GET /api/medicalRecords/{id}`
Returns details, notes, and associated diagnoses.

### Create Medical Record
`POST /api/medicalRecords`

### Update Medical Record
`PATCH /api/medicalRecords/{id}`

### Delete Medical Record
`DELETE /api/medicalRecords/{id}`

### Files
See `FILES.md` for file management endpoints (`/files`).

---

## 📜 Previous Records

### List Previous Records
`GET /api/previousRecords`

### Get Previous Record
`GET /api/previousRecords/{id}`

### Create Previous Record
`POST /api/previousRecords`

### Update Previous Record
`PATCH /api/previousRecords/{id}`

### Delete Previous Record
`DELETE /api/previousRecords/{id}`

### Files
See `FILES.md` for file management endpoints (`/files`).