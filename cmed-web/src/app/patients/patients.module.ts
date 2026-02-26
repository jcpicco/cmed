import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientDetailComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PatientsModule { }
