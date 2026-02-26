import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { jsPDF } from 'jspdf';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { MedicalRecordService } from '../../services/medical-record.service';
import { PreviousRecordService } from '../../services/previous-record.service';
import { NoteService } from '../../services/note.service';
import { DiagnoseService } from '../../services/diagnose.service';
import { MedicalRecordFileService } from '../../services/medical-record-file.service';
import { PreviousRecordFileService } from '../../services/previous-record-file.service';
import { PatientDto, PatientUpdateDto } from '../../models/patient.model';
import { MedicalRecordListDto, MedicalRecordDto } from '../../models/medical-record.model';
import { PreviousRecordListDto } from '../../models/previous-record.model';
import { Note } from '../../models/note.model';
import { Diagnose } from '../../models/diagnose.model';
import { MedicalRecordFile, PreviousRecordFile } from '../../models/file.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { PdfService } from '../../services/pdf.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  selectedPatient: PatientDto | null = null;
  loading = true;




  // Medical and Previous Records
  medicalRecords: MedicalRecordListDto[] = [];
  previousRecords: PreviousRecordListDto[] = [];
  medicalRecordsLoading = true;
  previousRecordsLoading = true;
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
  patientNotesLoading = true;
  patientNotesPage = 1;
  patientNoteSort = { field: 'createdAt', direction: 'asc' };
  showPatientNoteModal = false;
  showViewPatientNoteModal = false;
  patientNoteForm: FormGroup;
  patientNoteFormLoading = false;
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

  // Atomic Note Modal
  showNoteModal = false;
  noteForm: FormGroup;
  noteFormLoading = false;
  editingNote: Note | null = null;

  // Atomic Diagnose Modal
  showDiagnoseModal = false;
  diagnoseForm: FormGroup;
  diagnoseFormLoading = false;
  editingDiagnose: Diagnose | null = null;

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
  // Pagination for Main Lists (10 items)

  notesPage = 1;
  diagnosesPage = 1;
  filesPage = 1;

  // Pagination for Records Lists
  medicalPage = 1;
  previousRecordsPage = 1;

  // Edit Patient
  patientForm: FormGroup;
  formSubmitted = false;
  formLoading = false;
  formError: string | null = null;

  // Email functionality
  showEmailModal = false;
  emailRecipient = '';
  emailSubject = '';


  // PDF Pagination
  pdfMedicalPage = 1;
  pdfPreviousPage = 1;
  readonly pdfItemsPerPage = 3;

  // PDF state
  showPdfModal = false;
  pdfLoading = false;
  generatedPdf: jsPDF | null = null;
  selectedMedicalRecordIds: string[] = [];
  selectedPreviousRecordIds: string[] = [];
  emailSending = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.medicalRecordForm = this.createMedicalRecordForm();
    this.previousRecordForm = this.createPreviousRecordForm();
    this.patientNoteForm = this.createPatientNoteForm();
    this.noteForm = this.createNoteForm();
    this.diagnoseForm = this.createDiagnoseForm();
    this.patientForm = this.createPatientForm();
  }

  private createNoteForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]]
    });
  }

  private createPatientForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthDate: ['', Validators.required],
      allergies: ['', [Validators.maxLength(255)]]
    });
  }

  getFieldError(field: string): string {
    const control = this.patientForm.get(field);
    if (!control || !control.errors || (!control.touched && !this.formSubmitted)) return '';
    if (control.errors['required']) return 'Este campo es requerido';
    if (control.errors['email']) return 'Formato de email inválido';
    if (control.errors['minlength']) return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
    return 'Campo inválido';
  }

  private createDiagnoseForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]],
      prescription: ['', [Validators.minLength(5), Validators.maxLength(10000)]],
      protocol: ['', [Validators.minLength(5), Validators.maxLength(10000)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPatientDetails(id);
    } else {
      this.router.navigate(['/patients']);
    }
  }

  loadPatientDetails(id: string): void {
    this.loading = true;
    this.patientService.getPatientById(id).subscribe({
      next: (fullPatient) => {
        this.selectedPatient = fullPatient;
        this.loadMedicalRecords(id);
        this.loadPreviousRecords(id);
        this.loadPatientNotes(id);
        this.loading = false;
        this.selectedTab = 'medical';
      },
      error: (err) => {
        console.error('Error al cargar detalles del paciente:', err);
        this.loading = false;
        this.router.navigate(['/patients']);
      }
    });
  }

  // ==================== PAGINATION GETTERS ====================

  readonly pageSize = 10;
  readonly modalPageSize = 3;

  get paginatedMedicalRecords(): MedicalRecordListDto[] {
    const s = (this.medicalPage - 1) * this.pageSize;
    return this.medicalRecords.slice(s, s + this.pageSize);
  }
  get totalMedicalPages(): number { return Math.max(1, Math.ceil(this.medicalRecords.length / this.pageSize)); }

  get paginatedPreviousRecords(): PreviousRecordListDto[] {
    const s = (this.previousRecordsPage - 1) * this.pageSize;
    return this.previousRecords.slice(s, s + this.pageSize);
  }
  get totalPreviousPages(): number { return Math.max(1, Math.ceil(this.previousRecords.length / this.pageSize)); }

  get paginatedPatientNotes(): Note[] {
    const s = (this.patientNotesPage - 1) * this.pageSize;
    return this.patientNotes.slice(s, s + this.pageSize);
  }
  get totalPatientNotesPages(): number { return Math.max(1, Math.ceil(this.patientNotes.length / this.pageSize)); }

  get paginatedNotesForRecord(): Note[] {
    const s = (this.notesPage - 1) * this.modalPageSize;
    return this.notesForRecord.slice(s, s + this.modalPageSize);
  }
  get totalNotesPages(): number { return Math.max(1, Math.ceil(this.notesForRecord.length / this.modalPageSize)); }

  get paginatedDiagnosesForRecord(): Diagnose[] {
    const s = (this.diagnosesPage - 1) * this.modalPageSize;
    return this.diagnosesForRecord.slice(s, s + this.modalPageSize);
  }
  get totalDiagnosesPages(): number { return Math.max(1, Math.ceil(this.diagnosesForRecord.length / this.modalPageSize)); }

  get paginatedViewNotes(): Note[] {
    const s = (this.notesPage - 1) * this.modalPageSize;
    return this.viewMedicalRecordNotes.slice(s, s + this.modalPageSize);
  }
  get totalViewNotesPages(): number { return Math.max(1, Math.ceil(this.viewMedicalRecordNotes.length / this.modalPageSize)); }

  get paginatedViewDiagnoses(): Diagnose[] {
    const s = (this.diagnosesPage - 1) * this.modalPageSize;
    return this.viewMedicalRecordDiagnoses.slice(s, s + this.modalPageSize);
  }
  get totalViewDiagnosesPages(): number { return Math.max(1, Math.ceil(this.viewMedicalRecordDiagnoses.length / this.modalPageSize)); }

  get paginatedViewFiles(): (MedicalRecordFile | PreviousRecordFile)[] {
    const files = this.editingMedicalRecord || this.viewingMedicalRecord
      ? this.viewMedicalRecordFiles
      : this.viewPreviousRecordFiles;
    const s = (this.filesPage - 1) * this.modalPageSize;
    return files.slice(s, s + this.modalPageSize);
  }
  get totalFilesPages(): number {
    const len = (this.editingMedicalRecord || this.viewingMedicalRecord)
      ? this.viewMedicalRecordFiles.length : this.viewPreviousRecordFiles.length;
    return Math.max(1, Math.ceil(len / this.modalPageSize));
  }

  changeMedicalPage(delta: number): void { const n = this.medicalPage + delta; if (n >= 1 && n <= this.totalMedicalPages) this.medicalPage = n; }
  changePreviousPage(delta: number): void { const n = this.previousRecordsPage + delta; if (n >= 1 && n <= this.totalPreviousPages) this.previousRecordsPage = n; }
  changePatientNotesPage(delta: number): void { const n = this.patientNotesPage + delta; if (n >= 1 && n <= this.totalPatientNotesPages) this.patientNotesPage = n; }
  changeNotesPage(delta: number): void { const n = this.notesPage + delta; if (n >= 1) this.notesPage = n; }
  changeDiagnosesPage(delta: number): void { const n = this.diagnosesPage + delta; if (n >= 1) this.diagnosesPage = n; }
  changeFilesPage(delta: number): void { const n = this.filesPage + delta; if (n >= 1) this.filesPage = n; }
  changePdfMedicalPage(delta: number): void { const n = this.pdfMedicalPage + delta; if (n >= 1) this.pdfMedicalPage = n; }
  changePdfPreviousPage(delta: number): void { const n = this.pdfPreviousPage + delta; if (n >= 1) this.pdfPreviousPage = n; }

  /**
   * Crear un formulario reactivo para registros médicos
   */
  private createMedicalRecordForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10000)]],
      background: ['', [Validators.maxLength(10000)]]
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
      email: ['', [Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthDate: ['', Validators.required],
      allergies: ['', [Validators.maxLength(255)]]
    });
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
        this.medicalRecordsLoading = true;
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
        this.previousRecordsLoading = true;
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
        this.viewMedicalRecordNotes = (fullRecord.notes || []).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        this.viewMedicalRecordDiagnoses = (fullRecord.diagnoses || []).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
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

  // ==================== ATOMIC NOTE MODAL ====================

  openAddNoteModal(medicalRecordId: string): void {
    this.editingNote = null;
    this.noteForm.reset();
    this.noteError = null;
    this.showNoteModal = true;
  }

  openEditNoteModal(note: Note): void {
    this.editingNote = note;
    this.noteForm.patchValue({ description: note.description });
    this.noteError = null;
    this.showNoteModal = true;
  }

  closeNoteModal(): void {
    this.showNoteModal = false;
    this.editingNote = null;
    this.noteForm.reset();
    this.noteError = null;
  }

  saveNote(): void {
    if (this.noteForm.invalid || !this.viewingMedicalRecord) return;

    this.noteFormLoading = true;
    const body = { description: this.noteForm.value.description };
    const recordId = this.viewingMedicalRecord.id;

    if (this.editingNote) {
      this.noteService.updateMedicalRecordNote(recordId, this.editingNote.id, body).subscribe({
        next: () => {
          this.refreshMedicalRecordNotes(recordId);
          this.closeNoteModal();
          this.noteFormLoading = false;
        },
        error: (err) => {
          this.noteError = 'Error al actualizar la nota';
          this.noteFormLoading = false;
        }
      });
    } else {
      this.noteService.createMedicalRecordNote(recordId, body).subscribe({
        next: () => {
          this.refreshMedicalRecordNotes(recordId);
          this.closeNoteModal();
          this.noteFormLoading = false;
        },
        error: (err) => {
          this.noteError = 'Error al crear la nota';
          this.noteFormLoading = false;
        }
      });
    }
  }

  deleteNoteFromModal(noteId: string): void {
    if (confirm('¿Está seguro de que desea eliminar esta valoración?') && this.viewingMedicalRecord) {
      this.noteFormLoading = true;
      this.noteService.deleteMedicalRecordNote(this.viewingMedicalRecord.id, noteId).subscribe({
        next: () => {
          this.refreshMedicalRecordNotes(this.viewingMedicalRecord!.id);
          this.closeNoteModal();
          this.noteFormLoading = false;
        },
        error: (err) => {
          this.noteError = 'Error al eliminar la nota';
          this.noteFormLoading = false;
        }
      });
    }
  }

  private refreshMedicalRecordNotes(recordId: string): void {
    this.medicalRecordService.getMedicalRecordById(recordId).subscribe({
      next: (fullRecord) => {
        this.viewMedicalRecordNotes = (fullRecord.notes || []).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        const totalPages = Math.ceil(this.viewMedicalRecordNotes.length / this.modalPageSize) || 1;
        if (this.notesPage > totalPages) {
          this.notesPage = totalPages;
        }
      }
    });
  }

  // ==================== ATOMIC DIAGNOSE MODAL ====================

  openAddDiagnoseModal(medicalRecordId: string): void {
    this.editingDiagnose = null;
    this.diagnoseForm.reset();
    this.diagnoseError = null;
    this.showDiagnoseModal = true;
  }

  openEditDiagnoseModal(diagnose: Diagnose): void {
    this.editingDiagnose = diagnose;
    this.diagnoseForm.patchValue({
      description: diagnose.description,
      prescription: diagnose.prescription,
      protocol: diagnose.protocol
    });
    this.diagnoseError = null;
    this.showDiagnoseModal = true;
  }

  closeDiagnoseModal(): void {
    this.showDiagnoseModal = false;
    this.editingDiagnose = null;
    this.diagnoseForm.reset();
    this.diagnoseError = null;
  }

  saveDiagnose(): void {
    if (this.diagnoseForm.invalid || !this.viewingMedicalRecord) return;

    this.diagnoseFormLoading = true;
    const body = {
      description: this.diagnoseForm.value.description,
      prescription: this.diagnoseForm.value.prescription,
      protocol: this.diagnoseForm.value.protocol,
      medicalRecordId: this.viewingMedicalRecord.id
    };

    if (this.editingDiagnose) {
      this.diagnoseService.updateDiagnose(this.editingDiagnose.id, body).subscribe({
        next: () => {
          this.refreshMedicalRecordDiagnoses(this.viewingMedicalRecord!.id);
          this.closeDiagnoseModal();
          this.diagnoseFormLoading = false;
        },
        error: (err) => {
          this.diagnoseError = 'Error al actualizar el diagnóstico';
          this.diagnoseFormLoading = false;
        }
      });
    } else {
      this.diagnoseService.createDiagnose(body).subscribe({
        next: () => {
          this.refreshMedicalRecordDiagnoses(this.viewingMedicalRecord!.id);
          this.closeDiagnoseModal();
          this.diagnoseFormLoading = false;
        },
        error: (err) => {
          this.diagnoseError = 'Error al crear el diagnóstico';
          this.diagnoseFormLoading = false;
        }
      });
    }
  }

  deleteDiagnoseFromModal(diagnoseId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este diagnóstico?') && this.viewingMedicalRecord) {
      this.diagnoseFormLoading = true;
      this.diagnoseService.deleteDiagnose(diagnoseId).subscribe({
        next: () => {
          this.refreshMedicalRecordDiagnoses(this.viewingMedicalRecord!.id);
          this.closeDiagnoseModal();
          this.diagnoseFormLoading = false;
        },
        error: (err) => {
          this.diagnoseError = 'Error al eliminar el diagnóstico';
          this.diagnoseFormLoading = false;
        }
      });
    }
  }

  private refreshMedicalRecordDiagnoses(recordId: string): void {
    this.medicalRecordService.getMedicalRecordById(recordId).subscribe({
      next: (fullRecord) => {
        this.viewMedicalRecordDiagnoses = (fullRecord.diagnoses || []).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        const totalPages = Math.ceil(this.viewMedicalRecordDiagnoses.length / this.modalPageSize) || 1;
        if (this.diagnosesPage > totalPages) {
          this.diagnosesPage = totalPages;
        }
      }
    });
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

    this.showMedicalRecordModal = true;
  }

  /**
   * Abrir formulario para agregar registro previo
   */
  openAddPreviousRecordForm(): void {
    this.editingPreviousRecord = null;
    this.previousRecordForm.reset();

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
          description: fullRecord.description,
          background: fullRecord.background
        });
        this.notesForRecord = [...(fullRecord.notes || [])].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        this.diagnosesForRecord = [...(fullRecord.diagnoses || [])].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

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
          description: record.description,
          background: record.background
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

  sortMedicalRecords(field: string): void {
    if (this.medicalRecordSort.field === field) {
      this.medicalRecordSort.direction = this.medicalRecordSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.medicalRecordSort.field = field;
      this.medicalRecordSort.direction = 'desc';
    }
    this.sortRecordsList(this.medicalRecords, this.medicalRecordSort);
  }

  sortPreviousRecords(field: string): void {
    if (this.previousRecordSort.field === field) {
      this.previousRecordSort.direction = this.previousRecordSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.previousRecordSort.field = field;
      this.previousRecordSort.direction = 'desc';
    }
    this.sortRecordsList(this.previousRecords, this.previousRecordSort);
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
    if (this.editingMedicalRecord) {
      // Editar registro médico existente
      const editingRecordId = this.editingMedicalRecord.id;
      const updateDto = {
        description: this.medicalRecordForm.get('description')?.value,
        background: this.medicalRecordForm.get('background')?.value
      };
      this.medicalRecordService.updateMedicalRecord(editingRecordId, updateDto).subscribe({
        next: () => {
          // Guardar notas y diagnósticos
          this.saveNotesAndDiagnoses(editingRecordId);
        },
        error: (err) => {

          console.error('Error:', err);
          this.medicalRecordFormLoading = false;
        }
      });
    } else {
      // Crear nuevo registro médico
      const createDto = {
        patientId: selectedPatientId,
        description: this.medicalRecordForm.get('description')?.value,
        background: this.medicalRecordForm.get('background')?.value
      };
      this.medicalRecordService.createMedicalRecord(createDto).subscribe({
        next: (createdRecord) => {
          // Guardar notas y diagnósticos del nuevo registro
          this.saveNotesAndDiagnoses(createdRecord.id);
        },
        error: (err) => {

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
        this.medicalRecordFormLoading = false;
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
      recordToView.background = this.medicalRecordForm.get('background')?.value;
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
   * Abrir formulario para agregar nota de paciente
   */
  openAddPatientNoteForm(): void {
    this.editingPatientNote = null;
    this.patientNoteForm.reset();
    this.patientNoteError = null;
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
    this.patientNoteError = null;
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
    this.patientNoteError = null;

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
          this.patientNoteError = 'Error al actualizar nota';
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
          this.patientNoteError = 'Error al crear nota';
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
          this.patientNoteError = 'Error al eliminar la nota';
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
    this.patientNoteError = null;
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
   * Obtener icono de archivo
   */
  getFileIcon(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf': return 'PDF';
      case 'doc':
      case 'docx': return 'DOC';
      case 'xls':
      case 'xlsx': return 'XLS';
      case 'jpg':
      case 'jpeg':
      case 'png': return 'IMG';
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'webm': return 'VID';
      case 'zip':
      case 'rar': return 'ZIP';
      default: return 'FILE';
    }
  }

  /**
   * Get file content URL for preview
   */
  getFileContentUrl(file: any, type: 'medical' | 'previous'): string {
    if (type === 'medical') {
      return `${environment.apiUrl}/medical-records/${file.medicalRecordId}/files/${file.id}/content`;
    }
    return `${environment.apiUrl}/previous-records/${file.previousRecordId}/files/${file.id}/content`;
  }

  /**
   * Check if file is an image
   */
  isImageFile(file: any): boolean {
    const ext = file.originalName?.split('.').pop()?.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'].includes(ext);
  }

  /**
   * Check if file is a video
   */
  isVideoFile(file: any): boolean {
    const ext = file.originalName?.split('.').pop()?.toLowerCase();
    return ['mp4', 'webm', 'ogg', 'mov'].includes(ext);
  }

  /**
   * Descargar archivo médico
   */
  downloadMedicalRecordFile(file: any): void {
    // Implementar la descarga real a través del servicio
    // Por ahora, asumimos que el filePath es una URL accesible
    if (file.fileUrl) {
      window.open(file.fileUrl, '_blank');
    }
  }

  /**
   * Eliminar archivo de registro médico
   */
  deleteMedicalRecordFile(recordId: string, fileId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este archivo?')) {
      this.medicalRecordFileService.deleteFile(recordId, fileId).subscribe({
        next: () => {
          this.viewMedicalRecordFiles = this.viewMedicalRecordFiles.filter(f => f.id !== fileId);
          const totalPages = Math.ceil(this.viewMedicalRecordFiles.length / this.modalPageSize) || 1;
          if (this.filesPage > totalPages) {
            this.filesPage = totalPages;
          }
        },
        error: (err) => {
          console.error('Error al eliminar archivo:', err);
          alert('Error al eliminar el archivo');
        }
      });
    }
  }

  /**
   * Eliminar archivo de registro previo
   */
  deletePreviousRecordFile(recordId: string, fileId: string): void {
    if (confirm('¿Está seguro de que desea eliminar este archivo?')) {
      this.previousRecordFileService.deleteFile(recordId, fileId).subscribe({
        next: () => {
          this.viewPreviousRecordFiles = this.viewPreviousRecordFiles.filter(f => f.id !== fileId);
          const totalPages = Math.ceil(this.viewPreviousRecordFiles.length / this.modalPageSize) || 1;
          if (this.filesPage > totalPages) {
            this.filesPage = totalPages;
          }
        },
        error: (err) => {
          console.error('Error al eliminar archivo:', err);
          alert('Error al eliminar el archivo');
        }
      });
    }
  }

  // ==================== PDF IMPLEMENTATION ====================

  isMedicalRecordSelected(id: string): boolean { return this.selectedMedicalRecordIds.includes(id); }
  toggleMedicalRecordSelection(id: string, event: Event): void {
    event.stopPropagation();
    const idx = this.selectedMedicalRecordIds.indexOf(id);
    if (idx >= 0) this.selectedMedicalRecordIds.splice(idx, 1);
    else this.selectedMedicalRecordIds.push(id);
  }
  isPreviousRecordSelected(id: string): boolean { return this.selectedPreviousRecordIds.includes(id); }
  togglePreviousRecordSelection(id: string, event: Event): void {
    event.stopPropagation();
    const idx = this.selectedPreviousRecordIds.indexOf(id);
    if (idx >= 0) this.selectedPreviousRecordIds.splice(idx, 1);
    else this.selectedPreviousRecordIds.push(id);
  }

  get paginatedPdfMedicalRecords(): MedicalRecordListDto[] {
    const s = (this.pdfMedicalPage - 1) * this.pdfItemsPerPage;
    return this.medicalRecords.slice(s, s + this.pdfItemsPerPage);
  }
  get totalPdfMedicalPages(): number { return Math.max(1, Math.ceil(this.medicalRecords.length / this.pdfItemsPerPage)); }
  get paginatedPdfPreviousRecords(): PreviousRecordListDto[] {
    const s = (this.pdfPreviousPage - 1) * this.pdfItemsPerPage;
    return this.previousRecords.slice(s, s + this.pdfItemsPerPage);
  }
  get totalPdfPreviousPages(): number { return Math.max(1, Math.ceil(this.previousRecords.length / this.pdfItemsPerPage)); }

  generatePdf(): void {
    this.selectedMedicalRecordIds = [];
    this.selectedPreviousRecordIds = [];
    this.generatedPdf = null;
    this.showPdfModal = true;
  }

  closePdfModal(): void {
    this.showPdfModal = false;
    this.generatedPdf = null;
  }

  confirmPdfGeneration(): void {
    if (!this.selectedPatient) return;
    if (this.selectedMedicalRecordIds.length === 0 && this.selectedPreviousRecordIds.length === 0) {
      alert('Seleccione al menos un registro para incluir en el PDF.');
      return;
    }
    this.pdfLoading = true;

    // Fetch full medical records (need notes+diagnoses)
    const medicalRequests: Observable<MedicalRecordDto>[] = this.selectedMedicalRecordIds.map(
      id => this.medicalRecordService.getMedicalRecordById(id)
    );

    // Previous records are already full DTOs from the list
    const selectedPrevious = this.previousRecords.filter(r => this.selectedPreviousRecordIds.includes(r.id));

    const doGenerate = (fullMedical: MedicalRecordDto[]) => {
      try {
        const doc = this.pdfService.generatePatientPdf(
          this.selectedPatient!,
          fullMedical,
          selectedPrevious
        );
        this.generatedPdf = doc;
      } catch (e) {
        console.error('Error generating PDF', e);
        alert('Error al generar el PDF');
      } finally {
        this.pdfLoading = false;
      }
    };

    if (medicalRequests.length > 0) {
      forkJoin(medicalRequests).subscribe({
        next: (fullMedical) => doGenerate(fullMedical),
        error: (err) => {
          console.error('Error fetching records for PDF', err);
          alert('Error al obtener los registros para el PDF');
          this.pdfLoading = false;
        }
      });
    } else {
      doGenerate([]);
    }
  }

  openPdf(): void {
    if (!this.generatedPdf) return;
    this.generatedPdf.save(`historia_clinica_${this.selectedPatient?.lastName || 'paciente'}.pdf`);
  }

  prepareEmail(): void {
    if (this.selectedPatient) {
      this.emailRecipient = this.selectedPatient.email || '';
      this.emailSubject = `Informe clínico - ${this.selectedPatient.name} ${this.selectedPatient.lastName}`;
    }
    this.showEmailModal = true;
  }

  cancelEmail(): void {
    this.showEmailModal = false;
  }

  executeEmail(): void {
    // Download the PDF first
    this.openPdf();
    // Then open the mailto
    const subject = encodeURIComponent(this.emailSubject);
    const body = encodeURIComponent(
      `Estimado/a,\n\nAdjunto encontrará el informe clínico del paciente ${this.selectedPatient?.name} ${this.selectedPatient?.lastName}.\n\nSaludos.`
    );
    window.location.href = `mailto:${this.emailRecipient}?subject=${subject}&body=${body}`;
    this.showEmailModal = false;
  }

  formatFileSize(bytes: number): string {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  }

  openMedicalRecordFile(file: MedicalRecordFile): void {
    const url = `${environment.apiUrl}/medical-records/${file.medicalRecordId}/files/${file.id}/content`;
    window.open(url, '_blank');
  }

  openPreviousRecordFile(file: PreviousRecordFile): void {
    const url = `${environment.apiUrl}/previous-records/${file.previousRecordId}/files/${file.id}/content`;
    window.open(url, '_blank');
  }

  // ==================== PATIENT ACTIONS ====================

  showEditPatientModal = false;

  openEditPatientForm(): void {
    if (!this.selectedPatient) return;
    this.patientForm.patchValue({
      name: this.selectedPatient.name,
      lastName: this.selectedPatient.lastName,
      email: this.selectedPatient.email,
      phone: this.selectedPatient.phone,
      dni: this.selectedPatient.dni,
      birthDate: this.formatDateForInput(this.selectedPatient.birthDate),
      allergies: this.selectedPatient.allergies
    });
    this.formError = null;
    this.formSubmitted = false;
    this.showEditPatientModal = true;
  }

  closeEditPatientModal(): void {
    this.showEditPatientModal = false;
    this.patientForm.reset();
  }

  savePatient(): void {
    if (this.patientForm.invalid || !this.selectedPatient) {
      this.formSubmitted = true;
      return;
    }

    this.formLoading = true;
    this.formError = null;

    const formVal = this.patientForm.getRawValue();
    const updateDto: PatientUpdateDto = {
      name: formVal.name,
      lastName: formVal.lastName,
      email: formVal.email,
      phone: formVal.phone,
      dni: formVal.dni,
      birthDate: this.convertDateToString(formVal.birthDate),
      allergies: formVal.allergies
    };

    this.patientService.updatePatient(this.selectedPatient.id, updateDto).subscribe({
      next: () => {
        this.loadPatientDetails(this.selectedPatient!.id);
        this.closeEditPatientModal();
        this.formLoading = false;
      },
      error: (err) => {
        console.error('Error al actualizar paciente:', err);
        this.formError = 'Error al actualizar paciente: ' + (err.error?.message || err.message || 'Error desconocido');
        this.formLoading = false;
      }
    });
  }

  confirmDeletePatient(): void {
    if (!this.selectedPatient) return;
    if (confirm(`¿Está seguro de que desea eliminar al paciente ${this.selectedPatient.name} ${this.selectedPatient.lastName}? Esta acción no se puede deshacer.`)) {
      this.patientService.deletePatient(this.selectedPatient.id).subscribe({
        next: () => {
          this.router.navigate(['/patients']);
        },
        error: (err) => {
          console.error('Error al eliminar paciente:', err);
          alert('Error al eliminar el paciente');
        }
      });
    }
  }
}
