# 🏥 CMED-WEB - Patient Management System

Medical management web system developed in Angular 9 for the administration of patients, medical records, previous medical records, and notes.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Main Modules](#-main-modules)
- [Additional Documentation](#-additional-documentation)

---

## ✨ Features

### Patient Management
- ✅ **Full CRUD** of patients with validations
- ✅ **Real-time search** by name, last name, email, or DNI
- ✅ **Dynamic sorting** by any column
- ✅ **Pagination** (10 patients per page)
- ✅ **Detailed view** with tabs

### Medical Records
- ✅ Complete management of **medical records**
- ✅ **Assessments** (medical notes)
- ✅ **Diagnoses** with treatments
- ✅ **Attachments** (documents, images, videos)
- ✅ **Separate modals** for creation/editing and viewing
- ✅ Sorting and pagination

### Previous Medical Records
- ✅ Recording of **patient's personal history**
- ✅ **Related attachments**
- ✅ Creation, editing, and deletion
- ✅ Read-only detailed view

### Patient Notes
- ✅ **Independent notes** system per patient
- ✅ Same design and functionality as medical records and history
- ✅ Creation, editing, and deletion
- ✅ Sorting by description or creation date
- ✅ Result pagination

### UX/UI Features
- ✅ **Date format** with creation time (dd/mm/yyyy hh:mm)
- ✅ **Text truncation** to 20 characters in lists
- ✅ **Loading indicators** on all operations
- ✅ **Form validations** in real time
- ✅ **Descriptive error messages**
- ✅ **Confirmations** before deleting
- ✅ Intuitive navigation with **nested modals**

---

## 🛠️ Technologies

- **Framework**: Angular 9
- **Language**: TypeScript 3.7
- **Forms**: Reactive Forms
- **HTTP**: HttpClient with RxJS
- **Styles**: SCSS
- **Backend**: Spring Boot REST API (port 8080)

---

## 📁 Project Structure

```
cmed-web/
├── src/
│   ├── app/
│   │   ├── services/          # HTTP Services
│   │   │   ├── patient.service.ts
│   │   │   ├── medical-record.service.ts
│   │   │   ├── previous-record.service.ts
│   │   │   ├── note.service.ts
│   │   │   ├── diagnose.service.ts
│   │   │   ├── medical-record-file.service.ts
│   │   │   └── previous-record-file.service.ts
│   │   ├── models/            # Models and Interfaces
│   │   │   ├── patient.model.ts
│   │   │   ├── medical-record.model.ts
│   │   │   ├── previous-record.model.ts
│   │   │   ├── note.model.ts
│   │   │   ├── diagnose.model.ts
│   │   │   └── file.model.ts
│   │   ├── patients/          # Patient Module
│   │   │   ├── patients.component.ts
│   │   │   ├── patients.component.html
│   │   │   └── patients.component.scss
│   │   └── home/              # Main page
│   └── environments/          # Environment configuration
└── SERVICES_DOCUMENTATION.md  # Services documentation

```

---

## 🚀 Installation

### Prerequisites
- Node.js 12+ and npm 6+
- Angular CLI 9
- Spring Boot backend running at `http://localhost:8080`

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd cmed-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure the backend**
Verify that `src/environments/environment.ts` has the correct URL:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

4. **Start the development server**
```bash
npm start
# or
ng serve
```

5. **Open in browser**
```
http://localhost:4200
```

---

## 📱 Main Modules

### PatientsComponent

Main component that manages all patient functionality.

**Features:**
- Main table with search, sorting, and pagination
- Details panel with 3 tabs:
  - 📋 Medical Record
  - 📂 Previous Records
  - 📝 Notes
- Reactive forms with validation
- Attachment management
- Full CRUD operations

**Main Methods:**
```typescript
// Patients
loadPatients()
viewPatientDetails(patient)
savePatient()
deletePatient(patient)

// Medical Records
loadMedicalRecords(patientId)
saveMedicalRecord()
addNoteToRecord()
addDiagnoseToRecord()

// Previous Records
loadPreviousRecords(patientId)
savePreviousRecord()

// Patient Notes
loadPatientNotes(patientId)
savePatientNote()
deletePatientNoteFromModal(noteId)

// Utilities
formatDate(date) // dd/mm/yyyy
formatDateTime(date) // dd/mm/yyyy hh:mm
truncateText(text, maxLength) // Truncates with "..."
```

---

## 🔗 API Endpoints

### Patients
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/patients` | List all |
| GET | `/api/patients/{id}` | Get by ID |
| POST | `/api/patients` | Create patient |
| PATCH | `/api/patients/{id}` | Update patient |
| DELETE | `/api/patients/{id}` | Delete patient |
| GET | `/api/patients/{id}/medicalRecords` | Medical records |
| GET | `/api/patients/{id}/previousRecords` | Previous records |
| GET | `/api/patients/{id}/notes` | Patient notes |

### Medical Records
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/medicalRecords` | List all |
| GET | `/api/medicalRecords/{id}` | Get by ID |
| POST | `/api/medicalRecords` | Create record |
| PATCH | `/api/medicalRecords/{id}` | Update record |
| DELETE | `/api/medicalRecords/{id}` | Delete record |
| GET | `/api/medicalRecords/{id}/notes` | Assessments |
| POST | `/api/medicalRecords/{id}/notes` | Create assessment |
| GET | `/api/medicalRecords/{id}/files` | Attachments |
| POST | `/api/medicalRecords/{id}/files` | Upload file |

### Notes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/patients/{id}/notes` | Patient notes |
| POST | `/api/patients/{id}/notes` | Create note |
| PATCH | `/api/patients/{id}/notes/{noteId}` | Update note |
| DELETE | `/api/patients/{id}/notes/{noteId}` | Delete note |
| POST | `/api/medicalRecords/{id}/notes` | Create assessment |
| PATCH | `/api/medicalRecords/{id}/notes/{noteId}` | Update assessment |

**Total:** 34+ endpoints connected

---

## 📖 Additional Documentation

- **[SERVICES_DOCUMENTATION.md](SERVICES_DOCUMENTATION.md)** - Complete service documentation
- **Architecture**: Injectable services pattern
- **Typing**: TypeScript interfaces for all models
- **Observables**: RxJS for asynchronous operations

---

## 🎨 UI Features

### Data Formatting
- **Dates**: `formatDate()` for dates without time
- **Dates with time**: `formatDateTime()` for timestamps
- **Long text**: `truncateText()` limits to 20 characters with "..."

### Modal System
- **Creation/Edit Modal**: Full forms with validations
- **View Modal**: Read-only with "Save" button to edit
- **Fluid navigation**: View → Edit → Updated View

### Sorting
All lists can be sorted by:
- Description/Name (alphabetical)
- Creation date (most recent first)
- Clicking the header toggles ascending/descending

### Pagination
- **Patients**: 10 per page
- **Medical records**: 10 per page
- **Previous records**: 10 per page
- **Notes**: 10 per page
- **Items in modals**: 3 per page

---

## 🐛 Troubleshooting

### Backend does not connect
Verify that Spring Boot is running at `http://localhost:8080`

### CORS Error
Configure CORS in the Spring Boot backend:
```java
@CrossOrigin(origins = "http://localhost:4200")
```

### Data does not update
Services automatically reload after CRUD operations

---

## 👥 Contribution

This project follows Angular best practices:
- Reactive components
- Separation of concerns
- Strong typing
- State management through services

---

## 📄 License

[Specify project license]

---

## 🎯 Future Improvements

- [ ] Authentication and authorization
- [ ] Advanced filters
- [ ] PDF export
- [ ] Charts and statistics
- [ ] Real-time notifications
- [ ] Offline mode with cache

---

**Developed with ❤️ for CMED**
