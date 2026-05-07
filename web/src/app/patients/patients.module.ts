import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { PatientsComponent } from "./patients.component";
import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientDetailComponent } from "./patient-detail/patient-detail.component";
import { PdfTemplateSelectorComponent } from "./pdf-template-selector/pdf-template-selector.component";

@NgModule({
  declarations: [
    PatientsComponent,
    PatientDetailComponent,
    PdfTemplateSelectorComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class PatientsModule {}
