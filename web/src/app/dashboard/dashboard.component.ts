import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PatientService } from '../services/patient.service';
import { PatientListDto } from '../models/patient.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  patients: PatientListDto[] = [];
  loading = false;
  error: string | null = null;
  backendConnected = false;
  private destroy$ = new Subject<void>();

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.checkBackendConnection();
  }

  checkBackendConnection() {
    this.loading = true;
    console.log('🔍 Intentando conectar al backend...');

    this.patientService.getAllPatients()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          this.patients = data;
          this.backendConnected = true;
          this.loading = false;
          console.log('✅ Backend conectado. Pacientes:', data);
        },
        (error) => {
          this.backendConnected = false;
          this.loading = false;

          console.error('❌ Error conectando al backend:', error);

          // Mensajes de error más específicos
          if (error.status === 0) {
            this.error = '❌ No se puede conectar al backend. Por favor verifica que:\n\n' +
              '1. Docker esté corriendo: docker ps\n' +
              '2. El contenedor medcenter-manager-api esté activo\n' +
              '3. El puerto 8080 esté expuesto\n\n' +
              'O ejecuta: docker-compose up en la carpeta medcenter-manager-app';
          } else if (error.status === 403 || error.status === 401) {
            this.error = `❌ Error de autenticación (${error.status})`;
          } else if (error.status >= 500) {
            this.error = `❌ Error del servidor (${error.status}): ${error.message}`;
          } else {
            this.error = `❌ Error: ${error.message || 'Desconocido'}`;
          }
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
