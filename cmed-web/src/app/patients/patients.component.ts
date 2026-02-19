import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { PatientService } from '../services/patient.service';
import { MedicalRecordService } from '../services/medical-record.service';
import { PreviousRecordService } from '../services/previous-record.service';
import { NoteService } from '../services/note.service';
import { DiagnoseService } from '../services/diagnose.service';
import { MedicalRecordFileService } from '../services/medical-record-file.service';
import { PreviousRecordFileService } from '../services/previous-record-file.service';
import { PatientListDto, PatientDto, PatientCreateDto, PatientUpdateDto } from '../models/patient.model';
import { MedicalRecordListDto } from '../models/medical-record.model';
import { PreviousRecordListDto } from '../models/previous-record.model';
import { Note } from '../models/note.model';
import { Diagnose } from '../models/diagnose.model';
import { MedicalRecordFile, PreviousRecordFile, BaseFile } from '../models/file.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { PdfService } from '../services/pdf.service';
import { jsPDF } from 'jspdf';
import { EmailService } from '../services/email.service';
import { MedicalRecordDto } from '../models/medical-record.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: PatientListDto[] = [];
  filteredPatients: PatientListDto[] = [];
  selectedPatient: PatientDto | null = null;
  showForm = false;
  isEditMode = false;
  loading = false;
  searchTerm = '';
  pageSize = 10;
  currentPage = 1;

  // Medical and Previous Records
  medicalRecords: MedicalRecordListDto[] = [];
  previousRecords: PreviousRecordListDto[] = [];
  medicalRecordsLoading = false;
  previousRecordsLoading = false;
  selectedTab: 'medical' | 'previous' | 'notes' = 'medical';

  // Sorting
  patientSort = { field: 'createdAt', direction: 'desc' };
  medicalRecordSort = { field: 'createdAt', direction: 'desc' };
  previousRecordSort = { field: 'createdAt', direction: 'desc' };

  // Modal Forms for Records
  showMedicalRecordModal = false;
  showPreviousRecordModal = false;
  showViewMedicalRecordModal = false;
  showViewPreviousRecordModal = false;
  medicalRecordForm: FormGroup;
  previousRecordForm: FormGroup;
  medicalRecordFormLoading = false;
  previousRecordFormLoading = false;
  medicalRecordFormError: string | null = null;
  previousRecordFormError: string | null = null;
  editingMedicalRecord: MedicalRecordListDto | null = null;
  editingPreviousRecord: PreviousRecordListDto | null = null;
  viewingMedicalRecord: MedicalRecordListDto | null = null;
  viewingPreviousRecord: PreviousRecordListDto | null = null;

  // Notes and Diagnoses for Medical Records
  notesForRecord: Note[] = [];
  diagnosesForRecord: Diagnose[] = [];
  viewMedicalRecordNotes: Note[] = [];
  viewMedicalRecordDiagnoses: Diagnose[] = [];

  // Patient Notes
  patientNotes: Note[] = [];
  patientNotesLoading = false;
  patientNotesPage = 1;
  patientNoteSort = { field: 'createdAt', direction: 'desc' };
  showPatientNoteModal = false;
  showViewPatientNoteModal = false;
  patientNoteForm: FormGroup;
  patientNoteFormLoading = false;
  patientNoteFormError: string | null = null;
  editingPatientNote: Note | null = null;
  viewingPatientNote: Note | null = null;
  newPatientNoteDescription = '';
  patientNoteError: string | null = null;

  newNoteDescription = '';
  newDiagnoseDescription = '';
  newDiagnosePrescription = '';
  newDiagnoseConduct = '';
  selectedDiagnose: Diagnose | null = null;
  noteError: string | null = null;
  diagnoseError: string | null = null;
  notesToDelete: string[] = [];
  diagnosesToDelete: string[] = [];

  // Files for Medical and Previous Records
  viewMedicalRecordFiles: MedicalRecordFile[] = [];
  viewPreviousRecordFiles: PreviousRecordFile[] = [];
  uploadingFile = false;
  selectedFile: File | null = null;
  fileError: string | null = null;

  // Content Popup for long descriptions
  showContentPopup = false;
  contentPopupTitle = '';
  contentPopupText = '';

  // Diagnose Details Popup
  showDiagnoseDetailsPopup = false;
  diagnoseDetailsData: Diagnose | null = null;

  // Pagination for Modal Lists (max 3 items)
  recordPageSize = 3;
  // Pagination for Main Lists (10 items)
  listPageSize = 10;

  notesPage = 1;
  diagnosesPage = 1;
  filesPage = 1;

  // Pagination for Records Lists
  medicalPage = 1;
  previousRecordsPage = 1;

  patientForm: FormGroup;
  formSubmitted = false;
  formLoading = false;
  formError: string | null = null;

  // PDF Generation
  selectedMedicalRecords: Set<string> = new Set();
  selectedPreviousRecords: Set<string> = new Set();
  generatedPdf: jsPDF | null = null;
  generatedPdfBlob: Blob | null = null;
  pdfLoading = false;
  showPdfModal = false;
  emailSending = false;

  // Email functionality
  showEmailModal = false;
  emailRecipient = '';
  emailSubject = '';


  // PDF Pagination
  pdfMedicalPage = 1;
  pdfPreviousPage = 1;
  readonly pdfItemsPerPage = 3;

  constructor(
    private patientService: PatientService,
    private medicalRecordService: MedicalRecordService,
    private previousRecordService: PreviousRecordService,
    private noteService: NoteService,
    private diagnoseService: DiagnoseService,
    private medicalRecordFileService: MedicalRecordFileService,
    private previousRecordFileService: PreviousRecordFileService,
    private formBuilder: FormBuilder,
    private pdfService: PdfService,
    private emailService: EmailService
  ) {
    this.patientForm = this.createForm();
    this.medicalRecordForm = this.createMedicalRecordForm();
    this.previousRecordForm = this.createPreviousRecordForm();
    this.patientNoteForm = this.createPatientNoteForm();
  }

  ngOnInit(): void {
    this.loadPatients();
  }

  /**
   * Crear un formulario reactivo para registros médicos
   */
  private createMedicalRecordForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]]
    });
  }

  /**
   * Crear un formulario reactivo para registros previos
   */
  private createPreviousRecordForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]]
    });
  }

  /**
   * Crear un formulario reactivo para notas del paciente
   */
  private createPatientNoteForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]]
    });
  }

  /**
   * Crear un formulario reactivo para pacientes
   */
  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthDate: ['', Validators.required],
      allergies: ['', [Validators.maxLength(255)]]
    });
  }

  /**
   * Cargar todos los pacientes
   */
  loadPatients(): void {
    this.loading = true;
    this.patientService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar pacientes:', err);
        this.loading = false;
      }
    });
  }

  /**
   * Filtrar pacientes por búsqueda
   */
  applyFilters(): void {
    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      patient.dni.includes(this.searchTerm)
    );
    this.sortPatientsList();
    this.currentPage = 1;
  }

  /**
   * Ordenar lista de pacientes
   */
  sortPatients(field: string): void {
    if (this.patientSort.field === field) {
      this.patientSort.direction = this.patientSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.patientSort.field = field;
      this.patientSort.direction = 'asc';
    }
    this.sortPatientsList();
  }

  private sortPatientsList(): void {
    this.filteredPatients.sort((a, b) => {
      const direction = this.patientSort.direction === 'asc' ? 1 : -1;
      const field = this.patientSort.field as keyof PatientListDto;

      let valA = a[field];
      let valB = b[field];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return -1 * direction;
      if (valA > valB) return 1 * direction;
      return 0;
    });
  }

  /**
   * Ordenar registros médicos
   */
  sortMedicalRecords(field: string): void {
    if (this.medicalRecordSort.field === field) {
      this.medicalRecordSort.direction = this.medicalRecordSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.medicalRecordSort.field = field;
      this.medicalRecordSort.direction = 'asc';
    }
    this.sortRecordsList(this.medicalRecords, this.medicalRecordSort);
  }

  /**
   * Ordenar registros previos
   */
  sortPreviousRecords(field: string): void {
    if (this.previousRecordSort.field === field) {
      this.previousRecordSort.direction = this.previousRecordSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.previousRecordSort.field = field;
      this.previousRecordSort.direction = 'asc';
    }
    this.sortRecordsList(this.previousRecords, this.previousRecordSort);
  }

  private sortRecordsList(list: any[], sortState: { field: string, direction: string }): void {
    list.sort((a, b) => {
      const direction = sortState.direction === 'asc' ? 1 : -1;
      const field = sortState.field;

      let valA = a[field];
      let valB = b[field];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return -1 * direction;
      if (valA > valB) return 1 * direction;
      return 0;
    });
  }

  /**
   * Obtener pacientes paginados
   */
  get paginatedPatients(): PatientListDto[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPatients.slice(start, start + this.pageSize);
  }

  /**
   * Calcular total de páginas
   */
  get totalPages(): number {
    return Math.ceil(this.filteredPatients.length / this.pageSize);
  }

  /**
   * Obtener registros médicos paginados
   */
  get paginatedMedicalRecords(): MedicalRecordListDto[] {
    const start = (this.medicalPage - 1) * this.listPageSize;
    return this.medicalRecords.slice(start, start + this.listPageSize);
  }

  get totalMedicalPages(): number {
    return Math.ceil(this.medicalRecords.length / this.listPageSize);
  }

  changeMedicalPage(delta: number): void {
    const newPage = this.medicalPage + delta;
    if (newPage >= 1 && newPage <= this.totalMedicalPages) {
      this.medicalPage = newPage;
    }
  }

  /**
   * Obtener registros previos paginados
   */
  get paginatedPreviousRecords(): PreviousRecordListDto[] {
    const start = (this.previousRecordsPage - 1) * this.listPageSize;
    return this.previousRecords.slice(start, start + this.listPageSize);
  }

  get totalPreviousPages(): number {
    return Math.ceil(this.previousRecords.length / this.listPageSize);
  }

  changePreviousPage(delta: number): void {
    const newPage = this.previousRecordsPage + delta;
    if (newPage >= 1 && newPage <= this.totalPreviousPages) {
      this.previousRecordsPage = newPage;
    }
  }

  /**
   * Abrir formulario para crear paciente
   */
  openCreateForm(): void {
    this.isEditMode = false;
    this.patientForm.reset();
    this.formError = null;
    this.showForm = true;
  }

  /**
   * Abrir formulario para editar paciente
   */
  openEditForm(patient: PatientListDto): void {
    this.isEditMode = true;
    this.selectedPatient = patient;
    this.patientService.getPatientById(patient.id).subscribe({
      next: (fullPatient) => {
        this.patientForm.patchValue({
          name: fullPatient.name,
          lastName: fullPatient.lastName,
          email: fullPatient.email,
          phone: fullPatient.phone,
          dni: fullPatient.dni,
          birthDate: this.formatDateForInput(fullPatient.birthDate),
          allergies: fullPatient.allergies
        });
        this.showForm = true;
      },
      error: (err) => console.error('Error al cargar paciente:', err)
    });
  }

  /**
   * Guardar paciente (crear o editar)
   */
  savePatient(): void {
    if (this.patientForm.invalid) {
      this.formSubmitted = true;
      return;
    }

    this.formLoading = true;
    this.formError = null;

    const patientData = this.patientForm.value;

    if (this.isEditMode && this.selectedPatient) {
      // Actualizar paciente existente
      const updateDto: PatientUpdateDto = {
        name: patientData.name,
        lastName: patientData.lastName,
        email: patientData.email,
        phone: patientData.phone,
        dni: patientData.dni,
        birthDate: this.convertDateToString(patientData.birthDate),
        allergies: patientData.allergies
      };

      console.log('PATCH DTO:', updateDto);

      this.patientService.updatePatient(this.selectedPatient.id, updateDto).subscribe({
        next: () => {
          this.loadPatients();
          this.closeForm();
          this.formLoading = false;
        },
        error: (err) => {
          console.error('Error PATCH:', err);
          this.formError = 'Error al actualizar paciente: ' + (err.error?.message || err.message || 'Error desconocido');
          this.formLoading = false;
        }
      });
    } else {
      // Crear nuevo paciente
      const createDto: PatientCreateDto = {
        name: patientData.name,
        lastName: patientData.lastName,
        email: patientData.email,
        phone: patientData.phone,
        dni: patientData.dni,
        birthDate: this.convertDateToString(patientData.birthDate),
        allergies: patientData.allergies
      };

      console.log('POST DTO:', createDto);

      this.patientService.createPatient(createDto).subscribe({
        next: () => {
          this.loadPatients();
          this.closeForm();
          this.formLoading = false;
        },
        error: (err) => {
          console.error('Error POST:', err);
          this.formError = 'Error al crear paciente: ' + (err.error?.message || err.message || 'Error desconocido');
          this.formLoading = false;
        }
      });
    }
  }

  /**
   * Eliminar paciente
   */
  deletePatient(patient: PatientListDto): void {
    if (confirm(`¿Estás seguro de que deseas eliminar a ${patient.name} ${patient.lastName}?`)) {
      this.patientService.deletePatient(patient.id).subscribe({
        next: () => {
          this.loadPatients();
        },
        error: (err) => console.error('Error al eliminar paciente:', err)
      });
    }
  }

  /**
   * Ver detalles del paciente
   */
  viewPatientDetails(patient: PatientListDto): void {
    this.selectedPatient = patient as PatientDto;
    this.showForm = false;
    this.selectedTab = 'medical';

    // Obtener detalles completos para asegurar que tenemos el teléfono y otros campos
    this.patientService.getPatientById(patient.id).subscribe({
      next: (fullPatient) => {
        this.selectedPatient = fullPatient;
      },
      error: (err) => console.error('Error al cargar detalles del paciente:', err)
    });

    this.loadMedicalRecords(patient.id);
    this.loadPreviousRecords(patient.id);
    this.loadPatientNotes(patient.id);
  }

  /**
   * Cargar registros médicos del paciente
   */
  loadMedicalRecords(patientId: string): void {
    this.medicalRecordsLoading = true;
    this.patientService.getMedicalRecordsByPatientId(patientId).subscribe({
      next: (data) => {
        this.medicalRecords = data;
        this.sortRecordsList(this.medicalRecords, this.medicalRecordSort);
        this.medicalPage = 1;
        this.medicalRecordsLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar registros médicos:', err);
        this.medicalRecordsLoading = false;
      }
    });
  }

  /**
   * Cargar registros previos del paciente
   */
  loadPreviousRecords(patientId: string): void {
    this.previousRecordsLoading = true;
    this.patientService.getPreviousRecordsByPatientId(patientId).subscribe({
      next: (data) => {
        this.previousRecords = data;
        this.sortRecordsList(this.previousRecords, this.previousRecordSort);
        this.previousRecordsPage = 1;
        this.previousRecordsLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar registros previos:', err);
        this.previousRecordsLoading = false;
      }
    });
  }

  /**
   * Ver detalles del registro médico (solo lectura)
   */
  viewMedicalRecordDetails(record: MedicalRecordListDto): void {
    this.viewingMedicalRecord = record;
    this.notesPage = 1;
    this.diagnosesPage = 1;
    this.filesPage = 1;
    // Cargar notas y diagnósticos del registro
    this.medicalRecordService.getMedicalRecordById(record.id).subscribe({
      next: (fullRecord) => {
        this.viewMedicalRecordNotes = fullRecord.notes || [];
        this.viewMedicalRecordDiagnoses = fullRecord.diagnoses || [];
        this.showViewMedicalRecordModal = true;
      },
      error: (err) => {
        console.error('Error al cargar detalles del registro:', err);
      }
    });
    // Cargar archivos del registro
    this.loadMedicalRecordFiles(record.id);
  }

  /**
   * Ver detalles del registro previo (solo lectura)
   */
  viewPreviousRecordDetails(record: PreviousRecordListDto): void {
    this.viewingPreviousRecord = record;
    this.filesPage = 1;
    this.showViewPreviousRecordModal = true;
    // Cargar archivos del registro
    this.loadPreviousRecordFiles(record.id);
  }

  /**
   * Cerrar modal de visualización de registro médico
   */
  closeViewMedicalRecordModal(): void {
    this.showViewMedicalRecordModal = false;
    this.viewingMedicalRecord = null;
    this.viewMedicalRecordNotes = [];
    this.viewMedicalRecordDiagnoses = [];
    this.viewMedicalRecordFiles = [];
    this.selectedFile = null;
    this.fileError = null;
  }

  /**
   * Cerrar modal de visualización de registro previo
   */
  closeViewPreviousRecordModal(): void {
    this.showViewPreviousRecordModal = false;
    this.viewingPreviousRecord = null;
    this.viewPreviousRecordFiles = [];
    this.selectedFile = null;
    this.fileError = null;
  }

  /**
   * Abrir formulario para agregar registro médico
   */
  openAddMedicalRecordForm(): void {
    this.editingMedicalRecord = null;
    this.medicalRecordForm.reset();
    this.medicalRecordFormError = null;
    this.showMedicalRecordModal = true;
  }

  /**
   * Abrir formulario para agregar registro previo
   */
  openAddPreviousRecordForm(): void {
    this.editingPreviousRecord = null;
    this.previousRecordForm.reset();
    this.previousRecordFormError = null;
    this.showPreviousRecordModal = true;
  }

  /**
   * Editar registro médico
   */
  editMedicalRecord(record: MedicalRecordListDto): void {
    this.closeViewMedicalRecordModal();

    // Reset modal pagination and deletion tracking
    this.notesPage = 1;
    this.diagnosesPage = 1;
    this.filesPage = 1;
    this.notesToDelete = [];
    this.diagnosesToDelete = [];
    this.viewMedicalRecordFiles = []; // Consolidamos aquí

    // Fetch full record to get notes and diagnoses
    this.medicalRecordFormLoading = true;
    this.medicalRecordService.getMedicalRecordById(record.id).subscribe({
      next: (fullRecord) => {
        this.editingMedicalRecord = fullRecord;
        this.medicalRecordForm.patchValue({
          description: fullRecord.description
        });
        this.notesForRecord = [...(fullRecord.notes || [])];
        this.diagnosesForRecord = [...(fullRecord.diagnoses || [])];
        this.medicalRecordFormError = null;
        this.showMedicalRecordModal = true;
        this.medicalRecordFormLoading = false;

        // Cargar archivos para el modo edición
        this.loadMedicalRecordFiles(record.id);
      },
      error: (err) => {
        console.error('Error loading record details for edit:', err);
        // Fallback to basic info if fetch fails
        this.editingMedicalRecord = record;
        this.medicalRecordForm.patchValue({
          description: record.description
        });
        this.notesForRecord = [];
        this.diagnosesForRecord = [];
        this.showMedicalRecordModal = true;
        this.medicalRecordFormLoading = false;

        // Cargar archivos para el modo edición
        this.loadMedicalRecordFiles(record.id);
      }
    });
  }

  /**
   * Editar registro previo
   */
  editPreviousRecord(record: PreviousRecordListDto): void {
    this.closeViewPreviousRecordModal();

    // Reset modal pagination
    this.filesPage = 1;

    this.editingPreviousRecord = record;
    this.previousRecordForm.patchValue({
      description: record.description
    });
    this.previousRecordFormError = null;
    this.showPreviousRecordModal = true;

    this.viewPreviousRecordFiles = []; // Clear before loading

    // Cargar archivos para el modo edición
    this.loadPreviousRecordFiles(record.id);
  }

  /**
   * Guardar registro médico (crear o editar)
   */
  saveMedicalRecord(): void {
    if (!this.medicalRecordForm.valid || !this.selectedPatient) {
      return;
    }

    const selectedPatientId = this.selectedPatient.id;
    this.medicalRecordFormLoading = true;
    this.medicalRecordFormError = null;

    if (this.editingMedicalRecord) {
      // Editar registro médico existente
      const editingRecordId = this.editingMedicalRecord.id;
      const updateDto = {
        description: this.medicalRecordForm.get('description')?.value
      };
      this.medicalRecordService.updateMedicalRecord(editingRecordId, updateDto).subscribe({
        next: () => {
          // Guardar notas y diagnósticos
          this.saveNotesAndDiagnoses(editingRecordId);
        },
        error: (err) => {
          this.medicalRecordFormError = 'Error al actualizar registro médico';
          console.error('Error:', err);
          this.medicalRecordFormLoading = false;
        }
      });
    } else {
      // Crear nuevo registro médico
      const createDto = {
        patientId: selectedPatientId,
        description: this.medicalRecordForm.get('description')?.value
      };
      this.medicalRecordService.createMedicalRecord(createDto).subscribe({
        next: (createdRecord) => {
          // Guardar notas y diagnósticos del nuevo registro
          this.saveNotesAndDiagnoses(createdRecord.id);
        },
        error: (err) => {
          this.medicalRecordFormError = 'Error al crear registro médico';
          console.error('Error:', err);
          this.medicalRecordFormLoading = false;
        }
      });
    }
  }

  /**
   * Guardar notas y diagnósticos del registro médico
   */
  private saveNotesAndDiagnoses(medicalRecordId: string): void {
    const deleteOps: Observable<any>[] = [];
    const createOps: Observable<any>[] = [];

    // Operaciones de eliminación
    this.notesToDelete.forEach(id => deleteOps.push(this.noteService.deleteMedicalRecordNote(medicalRecordId, id)));
    this.diagnosesToDelete.forEach(id => deleteOps.push(this.diagnoseService.deleteDiagnose(id)));

    // Operaciones de creación (solo para IDs temporales)
    this.notesForRecord.filter(n => this.isTempId(n.id)).forEach(note => {
      createOps.push(this.noteService.createMedicalRecordNote(medicalRecordId, {
        description: note.description
      }));
    });

    this.diagnosesForRecord.filter(d => this.isTempId(d.id)).forEach(diagnose => {
      createOps.push(this.diagnoseService.createDiagnose({
        medicalRecordId: medicalRecordId,
        description: diagnose.description,
        prescription: diagnose.prescription,
        protocol: diagnose.protocol
      }));
    });

    const allOps = [...deleteOps, ...createOps];

    if (allOps.length === 0) {
      this.finishMedicalRecordSave();
      return;
    }

    forkJoin(allOps).subscribe({
      next: () => {
        this.notesToDelete = [];
        this.diagnosesToDelete = [];
        this.finishMedicalRecordSave();
      },
      error: (err) => {
        console.error('Error al sincronizar notas/diagnósticos:', err);
        this.medicalRecordFormError = 'Error al sincronizar algunos elementos';
        this.finishMedicalRecordSave();
      }
    });
  }

  private finishMedicalRecordSave(): void {
    const selectedPatientId = this.selectedPatient?.id;
    if (selectedPatientId) {
      this.loadMedicalRecords(selectedPatientId);
    }

    const recordToView = this.editingMedicalRecord;

    // Update the local record with form values so the view is up to date immediately
    if (recordToView) {
      recordToView.description = this.medicalRecordForm.get('description')?.value;
    }

    this.closeMedicalRecordModal();

    if (recordToView) {
      // Return to view mode after update
      this.viewMedicalRecordDetails(recordToView);
    }
    this.medicalRecordFormLoading = false;
  }

  /**
   * Guardar registro previo (crear o editar)
   */
  savePreviousRecord(): void {
    if (!this.previousRecordForm.valid || !this.selectedPatient) {
      return;
    }

    const selectedPatientId = this.selectedPatient.id;
    this.previousRecordFormLoading = true;
    this.previousRecordFormError = null;

    if (this.editingPreviousRecord) {
      // Editar registro previo existente
      const updateDto = {
        description: this.previousRecordForm.get('description')?.value
      };
      this.previousRecordService.updatePreviousRecord(this.editingPreviousRecord.id, updateDto).subscribe({
        next: () => {
          this.loadPreviousRecords(selectedPatientId);
          const recordToView = this.editingPreviousRecord;

          // Update the local record with form values so the view is up to date immediately
          if (recordToView) {
            recordToView.description = this.previousRecordForm.get('description')?.value;
          }

          this.closePreviousRecordModal();
          if (recordToView) {
            this.viewPreviousRecordDetails(recordToView);
          }
          this.previousRecordFormLoading = false;
        },
        error: (err) => {
          this.previousRecordFormError = 'Error al actualizar registro previo';
          console.error('Error:', err);
          this.previousRecordFormLoading = false;
        }
      });
    } else {
      // Crear nuevo registro previo
      const createDto = {
        patientId: selectedPatientId,
        description: this.previousRecordForm.get('description')?.value
      };
      this.previousRecordService.createPreviousRecord(createDto).subscribe({
        next: () => {
          this.loadPreviousRecords(selectedPatientId);
          this.closePreviousRecordModal();
          this.previousRecordFormLoading = false;
        },
        error: (err) => {
          this.previousRecordFormError = 'Error al crear registro previo';
          console.error('Error:', err);
          this.previousRecordFormLoading = false;
        }
      });
    }
  }

  /**
   * Agregar nota al registro médico
   */
  addNoteToRecord(): void {
    if (!this.newNoteDescription.trim()) {
      this.noteError = 'La nota no puede estar vacía';
      return;
    }
    if (this.newNoteDescription.trim().length < 5) {
      this.noteError = 'La nota debe tener al menos 5 caracteres';
      return;
    }
    if (this.newNoteDescription.length > 255) {
      this.noteError = 'La nota no puede exceder los 255 caracteres';
      return;
    }

    this.noteError = null;
    const newNote: Note = {
      id: `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      medicalRecordId: this.editingMedicalRecord?.id || '',
      description: this.newNoteDescription.trim(),
      createdAt: new Date()
    };

    this.notesForRecord.push(newNote);
    this.newNoteDescription = '';
  }

  /**
   * Eliminar nota del registro médico
   */
  deleteNoteFromRecord(noteId: string): void {
    if (!this.isTempId(noteId)) {
      this.notesToDelete.push(noteId);
    }
    this.notesForRecord = this.notesForRecord.filter(note => note.id !== noteId);
    if (this.notesPage > 1 && this.notesPage > this.totalNotesPages) {
      this.notesPage = this.totalNotesPages;
    }
  }

  /**
   * Agregar nota al paciente
   */
  addPatientNote(): void {
    if (!this.newPatientNoteDescription.trim()) {
      this.patientNoteError = 'La nota no puede estar vacía';
      return;
    }

    if (!this.selectedPatient) return;

    this.patientNoteError = null;
    const description = this.newPatientNoteDescription.trim();

    this.noteService.createPatientNote(this.selectedPatient.id, { description }).subscribe({
      next: (note) => {
        this.patientNotes = [note, ...this.patientNotes];
        this.newPatientNoteDescription = '';
      },
      error: (err) => {
        console.error('Error al crear nota de paciente:', err);
        this.patientNoteError = 'Error al crear la nota';
      }
    });
  }

  /**
   * Eliminar nota del paciente
   */
  deletePatientNote(noteId: string): void {
    if (!this.selectedPatient) return;

    if (confirm('¿Está seguro de que desea eliminar esta nota?')) {
      this.noteService.deletePatientNote(this.selectedPatient.id, noteId).subscribe({
        next: () => {
          this.patientNotes = this.patientNotes.filter(n => n.id !== noteId);
          if (this.patientNotesPage > 1 && this.patientNotesPage > this.totalPatientNotesPages) {
            this.patientNotesPage = this.totalPatientNotesPages;
          }
        },
        error: (err) => {
          console.error('Error al eliminar nota de paciente:', err);
          this.patientNoteError = 'Error al eliminar la nota';
        }
      });
    }
  }

  /**
   * Agregar diagnóstico al registro médico
   */
  addDiagnoseToRecord(): void {
    if (!this.newDiagnoseDescription.trim()) {
      this.diagnoseError = 'La descripción del diagnóstico no puede estar vacía';
      return;
    }
    if (this.newDiagnoseDescription.trim().length < 5) {
      this.diagnoseError = 'La descripción debe tener al menos 5 caracteres';
      return;
    }
    if (this.newDiagnoseDescription.length > 1000) {
      this.diagnoseError = 'La descripción no puede exceder los 1000 caracteres';
      return;
    }
    if (this.newDiagnosePrescription.length > 255) {
      this.diagnoseError = 'El tratamiento no puede exceder los 255 caracteres';
      return;
    }
    if (this.newDiagnoseConduct.length > 1000) {
      this.diagnoseError = 'La conducta no puede exceder los 1000 caracteres';
      return;
    }
    if (this.newDiagnoseConduct.trim() && this.newDiagnoseConduct.trim().length < 5) {
      this.diagnoseError = 'La conducta debe tener al menos 5 caracteres';
      return;
    }

    this.diagnoseError = null;
    const newDiagnose: Diagnose = {
      id: `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      medicalRecordId: this.editingMedicalRecord?.id || '',
      description: this.newDiagnoseDescription.trim(),
      prescription: this.newDiagnosePrescription.trim() || undefined,
      protocol: this.newDiagnoseConduct.trim() || undefined,
      createdAt: new Date()
    };

    this.diagnosesForRecord.push(newDiagnose);
    this.newDiagnoseDescription = '';
    this.newDiagnosePrescription = '';
    this.newDiagnoseConduct = '';
  }

  /**
   * Eliminar diagnóstico del registro médico
   */
  deleteDiagnoseFromRecord(diagnoseId: string): void {
    if (!this.isTempId(diagnoseId)) {
      this.diagnosesToDelete.push(diagnoseId);
    }
    this.diagnosesForRecord = this.diagnosesForRecord.filter(d => d.id !== diagnoseId);
    if (this.diagnosesPage > 1 && this.diagnosesPage > this.totalDiagnosesPages) {
      this.diagnosesPage = this.totalDiagnosesPages;
    }
  }

  private isTempId(id: string): boolean {
    return id.startsWith('temp_');
  }

  /**
   * Cerrar modal de registro médico
   */
  closeMedicalRecordModal(): void {
    this.showMedicalRecordModal = false;
    this.medicalRecordForm.reset();
    this.medicalRecordFormError = null;
    this.editingMedicalRecord = null;
    this.notesForRecord = [];
    this.diagnosesForRecord = [];
    this.viewMedicalRecordFiles = []; // Limpiar archivos al cerrar
    this.newNoteDescription = '';
    this.newDiagnoseDescription = '';
    this.newDiagnosePrescription = '';
    this.newDiagnoseConduct = '';
    this.noteError = null;
    this.diagnoseError = null;
  }

  /**
   * Cancelar edición de registro médico y volver al detalle
   */
  cancelMedicalRecordEdit(): void {
    const record = this.editingMedicalRecord;
    this.closeMedicalRecordModal();
    if (record) {
      this.viewMedicalRecordDetails(record);
    }
  }

  /**
   * Cerrar modal de registro previo
   */
  closePreviousRecordModal(): void {
    this.showPreviousRecordModal = false;
    this.previousRecordForm.reset();
    this.previousRecordFormError = null;
    this.editingPreviousRecord = null;
    this.viewPreviousRecordFiles = []; // Limpiar archivos al cerrar
  }

  /**
   * Cancelar edición de registro previo y volver al detalle
   */
  cancelPreviousRecordEdit(): void {
    const record = this.editingPreviousRecord;
    this.closePreviousRecordModal();
    if (record) {
      this.viewPreviousRecordDetails(record);
    }
  }

  /**
   * Eliminar registro médico
   */
  deleteMedicalRecord(recordId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este registro médico?')) {
      this.medicalRecordService.deleteMedicalRecord(recordId).subscribe({
        next: () => {
          if (this.selectedPatient) {
            this.loadMedicalRecords(this.selectedPatient.id);
          }
          this.closeMedicalRecordModal();
        },
        error: (err) => console.error('Error al eliminar registro médico:', err)
      });
    }
  }

  /**
   * Eliminar registro previo
   */
  deletePreviousRecord(recordId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este registro previo?')) {
      this.previousRecordService.deletePreviousRecord(recordId).subscribe({
        next: () => {
          if (this.selectedPatient) {
            this.loadPreviousRecords(this.selectedPatient.id);
          }
          this.closePreviousRecordModal();
        },
        error: (err) => console.error('Error al eliminar registro previo:', err)
      });
    }
  }

  // ==================== MÉTODOS DE GESTIÓN DE NOTAS DE PACIENTE ====================

  /**
   * Cargar notas de un paciente
   */
  loadPatientNotes(patientId: string): void {
    this.patientNotesLoading = true;
    this.noteService.getPatientNotes(patientId).subscribe({
      next: (notes) => {
        this.patientNotes = notes;
        this.sortPatientNotesList();
        this.patientNotesLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar notas del paciente:', err);
        this.patientNotesLoading = false;
      }
    });
  }

  /**
   * Ordenar notas del paciente
   */
  sortPatientNotes(field: string): void {
    if (this.patientNoteSort.field === field) {
      this.patientNoteSort.direction = this.patientNoteSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.patientNoteSort.field = field;
      this.patientNoteSort.direction = 'desc';
    }
    this.sortPatientNotesList();
  }

  sortPatientNotesList(): void {
    this.sortRecordsList(this.patientNotes, this.patientNoteSort);
  }

  /**
   * Abrir formulario para agregar nota de paciente
   */
  openAddPatientNoteForm(): void {
    this.editingPatientNote = null;
    this.patientNoteForm.reset();
    this.patientNoteFormError = null;
    this.showPatientNoteModal = true;
  }

  /**
   * Ver detalles de una nota del paciente
   */
  viewPatientNoteDetails(note: Note): void {
    this.viewingPatientNote = note;
    this.showViewPatientNoteModal = true;
  }

  /**
   * Editar nota del paciente
   */
  editPatientNote(note: Note): void {
    this.closeViewPatientNoteModal();
    this.editingPatientNote = note;
    this.patientNoteForm.patchValue({
      description: note.description
    });
    this.patientNoteFormError = null;
    this.showPatientNoteModal = true;
  }

  /**
   * Guardar nota del paciente (crear o editar)
   */
  savePatientNote(): void {
    if (!this.patientNoteForm.valid || !this.selectedPatient) {
      return;
    }

    const selectedPatientId = this.selectedPatient.id;
    this.patientNoteFormLoading = true;
    this.patientNoteFormError = null;

    if (this.editingPatientNote) {
      // Editar nota existente
      const noteId = this.editingPatientNote.id;
      const updateDto = {
        description: this.patientNoteForm.get('description')?.value
      };
      this.noteService.updatePatientNote(selectedPatientId, noteId, updateDto).subscribe({
        next: () => {
          // Capture note to view before closing modal resets it
          const noteToView = this.editingPatientNote;
          const updatedDescription = this.patientNoteForm.get('description')?.value;

          if (noteToView) {
            noteToView.description = updatedDescription;
          }

          // Close edit modal and show details immediately
          this.closePatientNoteModal();
          this.patientNoteFormLoading = false;

          if (noteToView) {
            this.viewPatientNoteDetails(noteToView);
          }

          // Refresh list in background
          this.noteService.getPatientNotes(selectedPatientId).subscribe({
            next: (notes) => {
              this.patientNotes = notes;
              this.sortPatientNotesList();
            },
            error: (err) => {
              console.error('Error al recargar notas:', err);
            }
          });
        },
        error: (err) => {
          this.patientNoteFormError = 'Error al actualizar nota';
          console.error('Error:', err);
          this.patientNoteFormLoading = false;
        }
      });
    } else {
      // Crear nueva nota
      const createDto = {
        description: this.patientNoteForm.get('description')?.value
      };
      this.noteService.createPatientNote(selectedPatientId, createDto).subscribe({
        next: () => {
          this.loadPatientNotes(selectedPatientId);
          this.closePatientNoteModal();
          this.patientNoteFormLoading = false;
        },
        error: (err) => {
          this.patientNoteFormError = 'Error al crear nota';
          console.error('Error:', err);
          this.patientNoteFormLoading = false;
        }
      });
    }
  }

  /**
   * Eliminar nota del paciente desde el modal
   */
  deletePatientNoteFromModal(noteId: string): void {
    if (!this.selectedPatient) return;

    if (confirm('¿Está seguro de que desea eliminar esta nota?')) {
      this.noteService.deletePatientNote(this.selectedPatient.id, noteId).subscribe({
        next: () => {
          if (this.selectedPatient) {
            this.loadPatientNotes(this.selectedPatient.id);
          }
          this.closePatientNoteModal();
        },
        error: (err) => {
          console.error('Error al eliminar nota:', err);
          this.patientNoteFormError = 'Error al eliminar la nota';
        }
      });
    }
  }

  /**
   * Cerrar modal de nota de paciente
   */
  closePatientNoteModal(): void {
    this.showPatientNoteModal = false;
    this.patientNoteForm.reset();
    this.patientNoteFormError = null;
    this.editingPatientNote = null;
  }

  /**
   * Cancelar edición de nota y volver al detalle
   */
  cancelPatientNoteEdit(): void {
    const note = this.editingPatientNote;
    this.closePatientNoteModal();
    if (note) {
      this.viewPatientNoteDetails(note);
    }
  }

  /**
   * Cerrar modal de vista de nota
   */
  closeViewPatientNoteModal(): void {
    this.showViewPatientNoteModal = false;
    this.viewingPatientNote = null;
  }

  // ==================== FIN DE MÉTODOS DE NOTAS DE PACIENTE ====================


  /**
   * Cerrar formulario
   */
  closeForm(): void {
    this.showForm = false;
    this.selectedPatient = null;
    this.patientForm.reset();
    this.formSubmitted = false;
    this.formError = null;
  }

  /**
   * Formato de fecha para input HTML
   */
  public formatDateForInput(date: string | Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  /**
   * Convertir fecha a string YYYY-MM-DD para enviar al backend
   */
  public convertDateToString(date: string | Date | null | undefined): string | undefined {
    if (!date) {
      return undefined;
    }
    try {
      // Si es string ya, devolverlo
      if (typeof date === 'string') {
        // Si ya está en formato YYYY-MM-DD, devolverlo
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
          return date;
        }
      }
      // Si es Date o número, convertir
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (e) {
      console.error('Error al convertir fecha:', date, e);
      return undefined;
    }
  }

  /**
   * Formato de fecha para mostrar
   */
  formatDate(date: string | Date | null | undefined): string {
    try {
      if (!date) {
        return 'Sin fecha';
      }

      // Si es string
      if (typeof date === 'string') {
        // Si contiene 'T', es LocalDateTime (ej: 2025-11-30T11:40:03.955164)
        // Si no contiene 'T', es LocalDate (ej: 1998-12-04)
        if (date.includes('T')) {
          // Parsear LocalDateTime
          return new Date(date).toLocaleDateString('es-ES');
        } else {
          // Parsear LocalDate
          return new Date(date + 'T00:00:00').toLocaleDateString('es-ES');
        }
      }

      // Si es Date object
      return new Date(date).toLocaleDateString('es-ES');
    } catch (e) {
      console.error('Error formateando fecha:', date, e);
      return 'Fecha inválida';
    }
  }

  /**
   * Formato de fecha y hora para mostrar (usado en fechas de creación)
   */
  formatDateTime(date: string | Date | null | undefined): string {
    try {
      if (!date) {
        return 'Sin fecha';
      }

      const dateObj = new Date(date);

      // Formatear fecha: dd/mm/aaaa
      const dateStr = dateObj.toLocaleDateString('es-ES');

      // Formatear hora: hh:mm
      const timeStr = dateObj.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });

      return `${dateStr} ${timeStr}`;
    } catch (e) {
      console.error('Error formateando fecha y hora:', date, e);
      return 'Fecha inválida';
    }
  }

  /**
   * Truncar texto para visualización
   */
  public truncateText(text: string | null | undefined, maxLength: number = 20): string {
    if (!text) {
      return '';
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }

  /**
   * Verificar si el texto necesita ser truncado
   */
  public needsTruncation(text: string | null | undefined, maxLength: number = 255): boolean {
    if (!text) {
      return false;
    }
    return text.length > maxLength;
  }

  /**
   * Abrir popup de contenido completo
   */
  public openContentPopup(title: string, content: string): void {
    this.contentPopupTitle = title;
    this.contentPopupText = content;
    this.showContentPopup = true;
  }

  /**
   * Cerrar popup de contenido
   */
  public closeContentPopup(): void {
    this.showContentPopup = false;
    this.contentPopupTitle = '';
    this.contentPopupText = '';
  }

  /**
   * Abrir popup con detalles completos del diagnóstico
   */
  openDiagnoseDetailsPopup(diagnose: Diagnose): void {
    this.diagnoseDetailsData = diagnose;
    this.showDiagnoseDetailsPopup = true;
  }

  /**
   * Cerrar popup de detalles del diagnóstico
   */
  closeDiagnoseDetailsPopup(): void {
    this.showDiagnoseDetailsPopup = false;
    this.diagnoseDetailsData = null;
  }

  /**
   * Obtener validación de campo
   */
  getFieldError(fieldName: string): string | null {
    const field = this.patientForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (field?.hasError('minlength')) {
      return `Debe tener al menos ${field.getError('minlength').requiredLength} caracteres`;
    }
    if (field?.hasError('maxlength')) {
      return `No puede exceder los ${field.getError('maxlength').requiredLength} caracteres`;
    }
    return null;
  }

  /**
   * Obtener validación de campo
   */
  getFieldValidation(fieldName: string, form: FormGroup = this.patientForm): any {
    const field = form.get(fieldName);
    return {
      invalid: field?.invalid && (field?.dirty || field?.touched || this.formSubmitted),
      errors: field?.errors
    };
  }

  /**
   * Cambiar página
   */
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // ==================== MÉTODOS DE GESTIÓN DE ARCHIVOS ====================

  /**
   * Cargar archivos de un registro médico
   */
  loadMedicalRecordFiles(medicalRecordId: string): void {
    this.medicalRecordFileService.getAllByMedicalRecordId(medicalRecordId).subscribe({
      next: (files) => {
        this.viewMedicalRecordFiles = files;
      },
      error: (err) => {
        console.error('Error al cargar archivos del registro médico:', err);
      }
    });
  }

  /**
   * Cargar archivos de un registro previo
   */
  loadPreviousRecordFiles(previousRecordId: string): void {
    console.log('Loading files for previous record:', previousRecordId);
    this.previousRecordFileService.getAllByPreviousRecordId(previousRecordId).subscribe({
      next: (files) => {
        console.log('Files loaded:', files.length);
        this.viewPreviousRecordFiles = files;
      },
      error: (err) => {
        console.error('Error al cargar archivos del registro previo:', err);
      }
    });
  }

  /**
   * Manejar selección de archivo
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileError = null;
    }
  }

  /**
   * Subir archivo a un registro médico
   */
  uploadMedicalRecordFile(medicalRecordId: string): void {
    if (!this.selectedFile) {
      this.fileError = 'Por favor seleccione un archivo';
      return;
    }

    this.uploadingFile = true;
    this.fileError = null;

    this.medicalRecordFileService.uploadFile(medicalRecordId, this.selectedFile).subscribe({
      next: (uploadedFile) => {
        // Use spreading for immutable update to trigger change detection
        this.viewMedicalRecordFiles = [...this.viewMedicalRecordFiles, uploadedFile];
        this.selectedFile = null;
        this.uploadingFile = false;
        // Resetear el input de archivo
        const fileInput = document.getElementById('editRecordFileInput') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      },
      error: (err) => {
        console.error('Error al subir archivo:', err);
        this.fileError = 'Error al subir el archivo: ' + (err.error?.message || err.message || 'Error desconocido');
        this.uploadingFile = false;
      }
    });
  }

  /**
   * Subir archivo a un registro previo
   */
  uploadPreviousRecordFile(previousRecordId: string): void {
    if (!this.selectedFile) {
      this.fileError = 'Por favor seleccione un archivo';
      return;
    }

    this.uploadingFile = true;
    this.fileError = null;

    this.previousRecordFileService.uploadFile(previousRecordId, this.selectedFile).subscribe({
      next: (uploadedFile) => {
        // Use spreading for immutable update to trigger change detection
        this.viewPreviousRecordFiles = [...this.viewPreviousRecordFiles, uploadedFile];
        this.selectedFile = null;
        this.uploadingFile = false;
        // Resetear el input de archivo
        const fileInput = document.getElementById('editPreviousRecordFileInput') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      },
      error: (err) => {
        console.error('Error al subir archivo:', err);
        this.fileError = 'Error al subir el archivo: ' + (err.error?.message || err.message || 'Error desconocido');
        this.uploadingFile = false;
      }
    });
  }

  /**
   * Eliminar archivo de un registro médico
   */
  deleteMedicalRecordFile(medicalRecordId: string, fileId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este archivo?')) {
      this.medicalRecordFileService.deleteFile(medicalRecordId, fileId).subscribe({
        next: () => {
          this.viewMedicalRecordFiles = this.viewMedicalRecordFiles.filter(f => f.id !== fileId);
          if (this.filesPage > 1 && this.filesPage > this.totalFilesPages) {
            this.filesPage = this.totalFilesPages;
          }
        },
        error: (err) => {
          console.error('Error al eliminar archivo:', err);
          this.fileError = 'Error al eliminar el archivo';
        }
      });
    }
  }

  /**
   * Eliminar archivo de un registro previo
   */
  deletePreviousRecordFile(previousRecordId: string, fileId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este archivo?')) {
      this.previousRecordFileService.deleteFile(previousRecordId, fileId).subscribe({
        next: () => {
          this.viewPreviousRecordFiles = this.viewPreviousRecordFiles.filter(f => f.id !== fileId);
          if (this.filesPage > 1 && this.filesPage > this.totalFilesPages) {
            this.filesPage = this.totalFilesPages;
          }
        },
        error: (err) => {
          console.error('Error al eliminar archivo:', err);
          this.fileError = 'Error al eliminar el archivo';
        }
      });
    }
  }

  /**
   * Obtener icono según la categoría del archivo
   */
  getFileIcon(category: string): string {
    switch (category) {
      case 'IMAGE':
        return '🖼️';
      case 'VIDEO':
        return '🎥';
      case 'DOCUMENT':
      default:
        return '📄';
    }
  }

  /**
   * Formatear tamaño de archivo
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Cambiar página
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  /**
   * Ir a página anterior
   */
  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  /**
   * Ir a página siguiente
   */
  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  // ==================== MÉTODOS DE PAGINACIÓN PARA EL MODAL ====================

  get paginatedNotesForRecord(): Note[] {
    const start = (this.notesPage - 1) * this.recordPageSize;
    return this.notesForRecord.slice(start, start + this.recordPageSize);
  }

  get totalNotesPages(): number {
    return Math.ceil(this.notesForRecord.length / this.recordPageSize);
  }

  get paginatedDiagnosesForRecord(): Diagnose[] {
    const start = (this.diagnosesPage - 1) * this.recordPageSize;
    return this.diagnosesForRecord.slice(start, start + this.recordPageSize);
  }

  get totalDiagnosesPages(): number {
    return Math.ceil(this.diagnosesForRecord.length / this.recordPageSize);
  }

  get paginatedViewNotes(): Note[] {
    const start = (this.notesPage - 1) * this.recordPageSize;
    return this.viewMedicalRecordNotes.slice(start, start + this.recordPageSize);
  }

  get totalViewNotesPages(): number {
    return Math.ceil(this.viewMedicalRecordNotes.length / this.recordPageSize);
  }

  get paginatedViewDiagnoses(): Diagnose[] {
    const start = (this.diagnosesPage - 1) * this.recordPageSize;
    return this.viewMedicalRecordDiagnoses.slice(start, start + this.recordPageSize);
  }

  get totalViewDiagnosesPages(): number {
    return Math.ceil(this.viewMedicalRecordDiagnoses.length / this.recordPageSize);
  }

  toggleDiagnosePopup(diagnose: Diagnose | null): void {
    this.selectedDiagnose = diagnose;
  }

  get paginatedViewFiles(): BaseFile[] {
    const start = (this.filesPage - 1) * this.recordPageSize;
    const isMedical = this.showViewMedicalRecordModal || this.showMedicalRecordModal;
    const files = isMedical ? this.viewMedicalRecordFiles : this.viewPreviousRecordFiles;

    console.log('Getter paginatedViewFiles:', {
      isMedical,
      totalFiles: files.length,
      page: this.filesPage,
      returned: files.slice(start, start + this.recordPageSize).length
    });

    return files.slice(start, start + this.recordPageSize);
  }

  get totalFilesPages(): number {
    const files = (this.showViewMedicalRecordModal || this.showMedicalRecordModal)
      ? this.viewMedicalRecordFiles
      : this.viewPreviousRecordFiles;

    return Math.ceil(files.length / this.recordPageSize);
  }

  // Métodos para cambiar de página en el modal
  changeNotesPage(delta: number): void {
    const newPage = this.notesPage + delta;
    const totalPages = this.showMedicalRecordModal ? this.totalNotesPages : this.totalViewNotesPages;
    if (newPage >= 1 && newPage <= totalPages) {
      this.notesPage = newPage;
    }
  }

  changeDiagnosesPage(delta: number): void {
    const newPage = this.diagnosesPage + delta;
    const totalPages = this.showMedicalRecordModal ? this.totalDiagnosesPages : this.totalViewDiagnosesPages;
    if (newPage >= 1 && newPage <= totalPages) {
      this.diagnosesPage = newPage;
    }
  }

  changeFilesPage(delta: number): void {
    const newPage = this.filesPage + delta;
    if (newPage >= 1 && newPage <= this.totalFilesPages) {
      this.filesPage = newPage;
    }
  }

  // ==================== PAGINACIÓN PARA NOTAS DE PACIENTE ====================

  get paginatedPatientNotes(): Note[] {
    const start = (this.patientNotesPage - 1) * this.recordPageSize;
    return this.patientNotes.slice(start, start + this.recordPageSize);
  }

  get totalPatientNotesPages(): number {
    return Math.ceil(this.patientNotes.length / this.recordPageSize);
  }

  changePatientNotesPage(delta: number): void {
    const newPage = this.patientNotesPage + delta;
    if (newPage >= 1 && newPage <= this.totalPatientNotesPages) {
      this.patientNotesPage = newPage;
    }
  }

  // ==================== MÉTODOS PARA ABRIR ARCHIVOS ====================

  openMedicalRecordFile(file: MedicalRecordFile): void {
    const url = `${environment.apiUrl}/medicalRecords/${file.medicalRecordId}/files/${file.id}/content`;
    window.open(url, '_blank');
  }

  openPreviousRecordFile(file: PreviousRecordFile): void {
    const url = `${environment.apiUrl}/previousRecords/${file.previousRecordId}/files/${file.id}/content`;
    window.open(url, '_blank');
  }

  // ==================== PDF GENERATION ====================

  /**
   * Open PDF generation Modal
   */
  openPdfModal(): void {
    if (!this.selectedPatient) return;
    this.selectedMedicalRecords.clear();
    this.selectedPreviousRecords.clear();
    this.generatedPdf = null;
    this.showPdfModal = true;
  }

  /**
   * Close PDF generation Modal
   */
  closePdfModal(): void {
    this.showPdfModal = false;
    this.generatedPdf = null;
  }

  /**
   * Confirm PDF Generation
   */
  confirmPdfGeneration(): void {
    if (!this.selectedPatient) return;

    this.pdfLoading = true;
    this.generatedPdf = null;

    // 1. Identify selected medical record IDs
    const selectedMedicalIds = Array.from(this.selectedMedicalRecords);

    // 2. Fetch full details for these records (to get notes/diagnoses)
    const observables = selectedMedicalIds.map(id => this.medicalRecordService.getMedicalRecordById(id));

    // Handle empty selection or actual fetching
    const medicalRecordsSource$ = selectedMedicalIds.length > 0 ? forkJoin(observables) : new Observable<MedicalRecordDto[]>(sub => {
      sub.next([]);
      sub.complete();
    });

    medicalRecordsSource$.subscribe({
      next: (fullMedicalRecords) => {
        // Filter previous records (already full details in list DTO usually enough for description, or we fetch if needed. ListDto has description.)
        const previousRecordsToPrint = this.previousRecords.filter(r => this.selectedPreviousRecords.has(r.id));

        try {
          this.generatedPdf = this.pdfService.generatePatientPdf(
            this.selectedPatient!,
            fullMedicalRecords,
            previousRecordsToPrint
          );
          this.generatedPdfBlob = this.generatedPdf.output('blob');
          this.pdfLoading = false;

          // Scroll to the bottom to show the buttons
          setTimeout(() => {
            const modalBody = document.querySelector('.modal-body.scrollable');
            if (modalBody) {
              modalBody.scrollTop = modalBody.scrollHeight;
            }
          }, 100);
        } catch (error) {
          console.error('Error generating PDF:', error);
          this.pdfLoading = false;
          alert('Error al generar el PDF');
        }
      },
      error: (err) => {
        console.error('Error fetching full medical records for PDF:', err);
        this.pdfLoading = false;
        alert('Error al obtener los detalles de las historias clínicas');
      }
    });
  }

  /**
   * Helper to get formatted filename
   */
  getPdfFileName(): string {
    if (!this.selectedPatient) return 'historia_clinica.pdf';
    const name = `${this.selectedPatient.lastName}_${this.selectedPatient.name}`.toLowerCase().replace(/\s+/g, '_');
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${name}_${day}_${month}_${year}.pdf`;
  }

  /**
   * Open generated PDF (Download with specific name)
   */
  openPdf(): void {
    if (this.generatedPdf) {
      // User requested specific filename format, so we use save() to enforce it
      this.generatedPdf.save(this.getPdfFileName());
    }
  }
  /**
   * Toggle medical record selection for PDF
   */
  toggleMedicalRecordSelection(id: string, event: Event): void {
    event.stopPropagation();
    if (this.selectedMedicalRecords.has(id)) {
      this.selectedMedicalRecords.delete(id);
    } else {
      this.selectedMedicalRecords.add(id);
    }
  }

  /**
   * Toggle previous record selection for PDF
   */
  togglePreviousRecordSelection(id: string, event: Event): void {
    event.stopPropagation();
    if (this.selectedPreviousRecords.has(id)) {
      this.selectedPreviousRecords.delete(id);
    } else {
      this.selectedPreviousRecords.add(id);
    }
  }

  /**
   * Check if medical record is selected
   */
  isMedicalRecordSelected(id: string): boolean {
    return this.selectedMedicalRecords.has(id);
  }

  /**
   * Check if previous record is selected
   */
  isPreviousRecordSelected(id: string): boolean {
    return this.selectedPreviousRecords.has(id);
  }

  /**
   * Generate PDF wrapper (Opens Modal)
   */
  generatePdf(): void {
    this.openPdfModal();
  }



  /**
   * Preparar el envío por email
   */
  prepareEmail(): void {
    if (!this.selectedPatient) return;

    // Set default subject
    this.emailSubject = `Historia Clínica - ${this.selectedPatient.lastName}, ${this.selectedPatient.name}`;
    this.emailRecipient = '';
    this.showEmailModal = true;
  }

  /**
   * Cancelar envío por email
   */
  cancelEmail(): void {
    this.showEmailModal = false;
    this.emailRecipient = '';
    this.emailSubject = '';
  }

  /**
   * Ejecutar envío por email (mailto + descarga)
   */
  executeEmail(): void {
    if (!this.selectedPatient || !this.generatedPdf) return;

    // 1. Descargar el PDF para que el usuario lo tenga a mano
    this.generatedPdf.save(this.getPdfFileName());

    // 2. Construir el link mailto
    const subject = encodeURIComponent(this.emailSubject);
    const body = encodeURIComponent(`Estimado/a,\n\nSe adjunta la historia clínica del paciente ${this.selectedPatient.name} ${this.selectedPatient.lastName}.\n\nAtentamente,\nCMED`);

    // Nota: No podemos adjuntar archivos automáticamente via mailto por seguridad del navegador
    const mailtoLink = `mailto:${this.emailRecipient}?subject=${subject}&body=${body}`;

    // 3. Abrir el cliente de correo
    window.location.href = mailtoLink;

    // 4. Mostrar mensaje de instrucción
    alert('El PDF se ha descargado en tu ordenador.\n\nSe ha abierto tu cliente de correo. Por favor, ARRASTRA o ADJUNTA el archivo PDF descargado al correo antes de enviarlo.');

    this.closePdfModal();
    this.showEmailModal = false;
  }


  // PDF Pagination Helpers

  get paginatedPdfMedicalRecords(): MedicalRecordListDto[] {
    const startIndex = (this.pdfMedicalPage - 1) * this.pdfItemsPerPage;
    return this.medicalRecords.slice(startIndex, startIndex + this.pdfItemsPerPage);
  }

  get totalPdfMedicalPages(): number {
    return Math.ceil(this.medicalRecords.length / this.pdfItemsPerPage);
  }

  changePdfMedicalPage(delta: number): void {
    const newPage = this.pdfMedicalPage + delta;
    if (newPage >= 1 && newPage <= this.totalPdfMedicalPages) {
      this.pdfMedicalPage = newPage;
    }
  }

  get paginatedPdfPreviousRecords(): PreviousRecordListDto[] {
    const startIndex = (this.pdfPreviousPage - 1) * this.pdfItemsPerPage;
    return this.previousRecords.slice(startIndex, startIndex + this.pdfItemsPerPage);
  }

  get totalPdfPreviousPages(): number {
    return Math.ceil(this.previousRecords.length / this.pdfItemsPerPage);
  }

  changePdfPreviousPage(delta: number): void {
    const newPage = this.pdfPreviousPage + delta;
    if (newPage >= 1 && newPage <= this.totalPdfPreviousPages) {
      this.pdfPreviousPage = newPage;
    }
  }

  get totalPdfItems(): number {
    return this.selectedMedicalRecords.size + this.selectedPreviousRecords.size;
  }

  generatePdf_OLD(): void {
    if (!this.selectedPatient) return;

    this.pdfLoading = true;
    this.generatedPdf = null;

    // Filter records
    const medicalRecordsToPrint = this.medicalRecords.filter(r => this.selectedMedicalRecords.has(r.id));
    const previousRecordsToPrint = this.previousRecords.filter(r => this.selectedPreviousRecords.has(r.id));

    // Wait a bit to show loading state (simulate async if needed, or just immediate)
    setTimeout(() => {
      try {
        this.generatedPdf = this.pdfService.generatePatientPdf(
          this.selectedPatient!,
          medicalRecordsToPrint as any,
          previousRecordsToPrint
        );
        this.pdfLoading = false;
      } catch (error) {
        console.error('Error generating PDF:', error);
        this.pdfLoading = false;
        alert('Error al generar el PDF');
      }
    }, 500);
  }

  /**
   * Open generated PDF in new tab
   */
  openPdf_OLD(): void {
    if (this.generatedPdf) {
      this.generatedPdf.output('dataurlnewwindow');
    }
  }

  /**
   * Email PDF (Stub)
   */
  emailPdf_OLD(): void {
    if (this.generatedPdf && this.selectedPatient) {
      // In a real app, this would send the blob to a backend endpoint
      // For now, we'll open a mailto link with the subject
      const subject = `Historia Clínica - ${this.selectedPatient.lastName}, ${this.selectedPatient.name}`;
      const body = 'Se adjunta la historia clínica solicitada.';

      // We can't attach files via mailto, so we just open the client
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      alert('Se ha abierto su cliente de correo. Nota: No es posible adjuntar el PDF automáticamente desde el navegador por seguridad. Debe guardar el PDF y adjuntarlo manualmente.');
    }
  }
}
