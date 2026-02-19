# 📋 PATIENT MANAGER - Complete Documentation

## 🎯 Overview

Complete patient management system with modern Angular interface and Spring Boot backend. Includes CRUD operations, search, pagination, and data validation.

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:8080/api
```

### Patients (`/patients`)

#### 1. **Get all patients**
```
GET /patients
Response: PatientListDto[]
Status: 200 OK
```

**Example:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@example.com",
    "dni": "12345678",
    "createdAt": "2025-11-16T10:30:00Z"
  }
]
```

---

#### 2. **Get patient by ID**
```
GET /patients/{patientId}
Response: PatientDto
Status: 200 OK
```

**Parameters:**
- `patientId` (string, path): Patient UUID

**Example:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "firstName": "John",
  "lastName": "Smith",
  "email": "john@example.com",
  "dni": "12345678",
  "phone": "555123456",
  "address": "123 Main Street",
  "createdAt": "2025-11-16T10:30:00Z"
}
```

---

#### 3. **Create new patient**
```
POST /patients
Request: PatientCreateDto
Response: PatientDto
Status: 201 Created
```

**Body:**
```json
{
  "firstName": "Mary",
  "lastName": "Johnson",
  "email": "mary@example.com",
  "dni": "87654321",
  "phone": "555987654",
  "address": "456 Central Avenue"
}
```

**Validations:**
- `firstName` (required, min 2 characters)
- `lastName` (required, min 2 characters)
- `email` (required, valid email format)
- `dni` (required, 3-20 characters)
- `phone` (optional, 3-20 characters)
- `address` (optional, min 5 characters)

---

#### 4. **Update patient**
```
PATCH /patients/{patientId}
Request: PatientUpdateDto
Response: PatientDto
Status: 200 OK
```

**Parameters:**
- `patientId` (string, path): Patient UUID

**Body (all fields optional):**
```json
{
  "firstName": "Mary Updated",
  "lastName": "Johnson",
  "email": "mary.new@example.com",
  "phone": "555111111",
  "address": "789 Central Avenue"
}
```

---

#### 5. **Delete patient**
```
DELETE /patients/{patientId}
Response: void
Status: 204 No Content
```

**Parameters:**
- `patientId` (string, path): Patient UUID

---

#### 6. **Get medical records of a patient**
```
GET /patients/{patientId}/medicalRecords
Response: MedicalRecordListDto[]
Status: 200 OK
```

**Parameters:**
- `patientId` (string, path): Patient UUID

---

#### 7. **Get previous records of a patient**
```
GET /patients/{patientId}/previousRecords
Response: PreviousRecordListDto[]
Status: 200 OK
```

**Parameters:**
- `patientId` (string, path): Patient UUID

---

## 📱 Angular Interface

### Component: `PatientsComponent`

#### Location
```
src/app/patients/patients.component.ts
src/app/patients/patients.component.html
src/app/patients/patients.component.scss
```

### Features

#### 1. **Patient List**
- Table with all patients
- Real-time search (name, last name, email, DNI)
- Pagination (10 patients per page)
- Information: name, last name, email, DNI, creation date

#### 2. **Create Patient**
- Reactive form with validation
- Fields: firstName, lastName, email, phone, dni, address
- Real-time validations
- Clear error messages

#### 3. **Edit Patient**
- Loads patient data
- Pre-populated form
- DNI disabled (not editable)
- Partial update (PATCH)

#### 4. **Delete Patient**
- Confirmation before deleting
- Automatic list update

#### 5. **View Details**
- Side panel with complete information
- Quick edit/delete option

#### 6. **Search and Filter**
- Search by:
  - First name (firstName)
  - Last name (lastName)
  - Email
  - DNI
- Real-time update
- Result counter

#### 7. **Pagination**
- 10 patients per page
- Buttons: Previous/Next
- Current page indicator
- Disabled at ends

---

## 🛠 Data Models

### PatientListDto
```typescript
interface PatientListDto {
  id: string;              // UUID
  firstName: string;       // First name
  lastName: string;        // Last name
  dni: string;            // ID number
  email: string;          // Email address
  createdAt: Date;        // Creation date
}
```

### PatientDto
```typescript
interface PatientDto extends PatientListDto {
  phone?: string;         // Phone
  address?: string;       // Address
}
```

### PatientCreateDto
```typescript
interface PatientCreateDto {
  firstName: string;      // Required
  lastName: string;       // Required
  dni: string;           // Required, unique
  email: string;         // Required
  phone?: string;        // Optional
  address?: string;      // Optional
}
```

### PatientUpdateDto
```typescript
interface PatientUpdateDto {
  firstName?: string;     // All optional
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
}
```

---

## 📊 States and Transitions

```
┌─────────────────┐
│   Empty List    │
└────────┬────────┘
         │ Create
         ▼
┌─────────────────┐     Search/Filter     ┌──────────────┐
│   List All      │◄────────────────────►│ Filtered List │
└────────┬────────┘                       └──────────────┘
         │
    ┌────┴────┬────────┬──────────┐
    │          │        │          │
    ▼ View     ▼ Edit   ▼ Delete   ▼ Create
  Detail     Form    Confirm    Form
    │          │        │          │
    └────┬─────┴────────┴──────────┘
         │
         ▼
    ┌─────────────┐
    │   Updated   │
    └─────────────┘
```

---

## 🎨 User Interface

### Sections

#### 1. **Header**
- Title: "Patient Manager"
- Button: "+ New Patient"

#### 2. **Search**
- Search input
- Result counter

#### 3. **Main Table**
| Column | Description |
|---------|-------------|
| First Name | firstName |
| Last Name | lastName |
| Email | email |
| DNI | dni |
| Phone | phone (if available) |
| Created | formatDate(createdAt) |
| Actions | View/Edit/Delete |

#### 4. **Modal Form**
- Fields in two columns
- Validation with error messages
- Buttons: Save/Cancel

#### 5. **Side Details**
- Complete patient view
- Formatted information
- Quick actions

---

## 🔒 Validations

### Required Fields
- `firstName`: 2+ characters
- `lastName`: 2+ characters
- `email`: valid format
- `dni`: 6-12 numeric digits

### Optional Fields
- `phone`: if provided, 7-15 digits
- `address`: if provided, 5+ characters

### Business Rules
- Unique DNI per patient
- Unique email per patient
- DNI cannot be edited after creation
- Logical deletion (soft delete)

---

## 🚀 Advanced Features

### 1. **Real-time Search**
```typescript
applyFilters(): void {
  this.filteredPatients = this.patients.filter(patient =>
    patient.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    patient.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    patient.dni.includes(this.searchTerm)
  );
}
```

### 2. **Pagination**
```typescript
get paginatedPatients(): PatientListDto[] {
  const start = (this.currentPage - 1) * this.pageSize;
  return this.filteredPatients.slice(start, start + this.pageSize);
}
```

### 3. **Reactive Validation**
```typescript
private createForm(): FormGroup {
  return this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^\d{7,15}$/)]],
    dni: ['', [Validators.required, Validators.pattern(/^\d{6,12}$/)]],
    // ... more fields
  });
}
```

---

## 📦 Dependencies

### Frontend (Angular)
- `@angular/common`
- `@angular/forms` (ReactiveFormsModule)
- `@angular/common/http` (HttpClientModule)
- `rxjs` (Observables)

### Backend (Spring Boot)
- `spring-boot-starter-web`
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-validation`
- `org.postgresql:postgresql`
- `org.projectlombok:lombok`

---

## 🔄 Data Flow

```
┌───────────────────────┐
│   Angular Interface   │
│  (PatientsComponent)  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   PatientService      │
│  (HTTP Calls)         │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   Spring Boot API     │
│  (REST Endpoints)     │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  PatientController    │
│  + PatientService     │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   PostgreSQL Database │
│  (Table: patients)    │
└───────────────────────┘
```

---

## 🧪 Usage Example

### 1. Create Patient
```typescript
const newPatient: PatientCreateDto = {
  firstName: 'Carlos',
  lastName: 'Rodriguez',
  email: 'carlos@example.com',
  dni: '11223344',
  phone: '555222333',
  address: '789 Main Square'
};

this.patientService.createPatient(newPatient).subscribe({
  next: (createdPatient) => {
    console.log('Patient created:', createdPatient);
  },
  error: (err) => {
    console.error('Error:', err);
  }
});
```

### 2. Search Patients
```typescript
this.searchTerm = 'Smith';
this.applyFilters();
// Result: filters all Smiths
```

### 3. Edit Patient
```typescript
const update: PatientUpdateDto = {
  phone: '555333444'
};

this.patientService.updatePatient(patientId, update).subscribe({
  next: () => {
    console.log('Patient updated');
  }
});
```

---

## 📝 Notes

- UUID-based system for unique identifiers
- Dates in ISO 8601 format
- Soft delete in database (deleted_at)
- Multi-language support (Spanish)
- Responsive interface (mobile-first)
- Validation on both client and server

---

## 🐛 Troubleshooting

### Error: "CORS header 'Access-Control-Allow-Origin' missing"
**Solution:** Ensure that WebConfig.java has the correct CORS configuration

### Error: "Property 'X' does not exist on type 'PatientDto'"
**Solution:** Check that TypeScript models match the backend DTOs

### Error: "Cannot POST /api/patients"
**Solution:** Verify that the backend is running on localhost:8080

---

**Last updated:** 30-11-2025
**Version:** 1.0.0
**Developed by:** GitHub Copilot
