import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jsPDF } from "jspdf";

import { MedicalRecordDto } from "../models/medical-record.model";
import { PatientDto } from "../models/patient.model";
import { PreviousRecordListDto } from "../models/previous-record.model";
import { PdfService } from "./pdf.service";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export type PdfFlowType = "legacy" | "template";

export interface PdfTemplateField {
  key: string;
  label: string;
  pageIndex: number;
  x: number;
  y: number;
  inputType?: "text" | "select";
  options?: string[];
  fontSize?: number;
  maxLength?: number;
  required?: boolean;
}

export interface PdfTemplateDefinition {
  id: string;
  name: string;
  assetPath: string;
  fields: PdfTemplateField[];
}

@Injectable({
  providedIn: "root",
})
export class PdfManagerService {
  private readonly templates: PdfTemplateDefinition[] = [
    {
      id: "gdpr_es",
      name: "Documento de Protección de Datos",
      assetPath: "assets/pdf/gdpr_es.pdf",
      fields: [
        {
          key: "date",
          label: "Fecha",
          pageIndex: 0,
          x: 104,
          y: 291,
          fontSize: 12,
          maxLength: 20,
          required: true,
        },
        {
          key: "fullName",
          label: "Nombre y Apellidos",
          pageIndex: 0,
          x: 175,
          y: 250,
          fontSize: 12,
          maxLength: 100,
          required: true,
        },
      ],
    },
    {
      id: "vitc_infusion_es",
      name: "Consentimiento Infusión de Vitamina C",
      assetPath: "assets/pdf/vitc_infusion_es.pdf",
      fields: [
        {
          key: "fullName",
          label: "Nombre y apellidos del paciente",
          pageIndex: 0,
          x: 101,
          y: 643,
          fontSize: 11,
          maxLength: 100,
          required: true,
        },
        {
          key: "age",
          label: "Edad del paciente",
          pageIndex: 0,
          x: 69,
          y: 632,
          fontSize: 11,
          maxLength: 3,
          required: true,
        },
        {
          key: "dni",
          label: "DNI del paciente",
          pageIndex: 0,
          x: 221,
          y: 632,
          fontSize: 11,
          maxLength: 20,
          required: true,
        },
        {
          key: "legalRepresentativeName",
          label: "Nombre y apellidos del representante legal",
          pageIndex: 0,
          x: 133,
          y: 577,
          fontSize: 10,
          maxLength: 100,
        },
        {
          key: "legalRepresentativeAge",
          label: "Edad del representante legal",
          pageIndex: 0,
          x: 57,
          y: 567,
          fontSize: 10,
          maxLength: 3,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI del representante legal",
          pageIndex: 0,
          x: 198,
          y: 567,
          fontSize: 10,
          maxLength: 20,
        },
        {
          key: "legalRepresentativeRole",
          label: "Tipo de representante legal",
          pageIndex: 0,
          x: 340,
          y: 567,
          inputType: "select",
          options: ["Representante legal", "Familiar", "Allegado"],
          fontSize: 10,
          maxLength: 40,
        },
        {
          key: "date",
          label: "Fecha",
          pageIndex: 0,
          x: 114,
          y: 98,
          fontSize: 12,
          maxLength: 20,
          required: true,
        },
      ],
    },
    {
      id: "non_pharma_es",
      name: "Consentimiento Básico sin Fármacos",
      assetPath: "assets/pdf/non_pharma_es.pdf",
      fields: [
        {
          key: "fullName",
          label: "Nombre y apellidos del paciente",
          pageIndex: 0,
          x: 101,
          y: 656,
          fontSize: 11,
          maxLength: 100,
          required: true,
        },
        {
          key: "age",
          label: "Edad del paciente",
          pageIndex: 0,
          x: 69,
          y: 645,
          fontSize: 11,
          maxLength: 3,
          required: true,
        },
        {
          key: "dni",
          label: "DNI del paciente",
          pageIndex: 0,
          x: 221,
          y: 645,
          fontSize: 11,
          maxLength: 20,
          required: true,
        },
        {
          key: "legalRepresentativeName",
          label: "Nombre y apellidos del representante legal",
          pageIndex: 0,
          x: 133,
          y: 591,
          fontSize: 10,
          maxLength: 100,
        },
        {
          key: "legalRepresentativeAge",
          label: "Edad del representante legal",
          pageIndex: 0,
          x: 57,
          y: 581,
          fontSize: 10,
          maxLength: 3,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI del representante legal",
          pageIndex: 0,
          x: 198,
          y: 581,
          fontSize: 10,
          maxLength: 20,
        },
        {
          key: "legalRepresentativeRole",
          label: "Tipo de representante legal",
          pageIndex: 0,
          x: 340,
          y: 581,
          inputType: "select",
          options: ["Representante legal", "Familiar", "Allegado"],
          fontSize: 10,
          maxLength: 40,
        },
        {
          key: "generalMedicalHistory",
          label: "Antecedentes generales",
          pageIndex: 0,
          x: 270,
          y: 538,
          fontSize: 10,
          maxLength: 120,
        },
        {
          key: "allergyDetail",
          label: "Detalle de alergias",
          pageIndex: 0,
          x: 57,
          y: 501,
          fontSize: 10,
          maxLength: 80,
        },
        {
          key: "relatedMedicalHistory",
          label: "Antecedentes relacionados",
          pageIndex: 0,
          x: 57,
          y: 458,
          fontSize: 10,
          maxLength: 180,
        },
        {
          key: "procedureName",
          label: "Procedimiento a realizar",
          pageIndex: 0,
          x: 201,
          y: 160,
          fontSize: 10,
          maxLength: 120,
        },
        {
          key: "date",
          label: "Fecha",
          pageIndex: 0,
          x: 114,
          y: 135,
          fontSize: 12,
          maxLength: 20,
          required: true,
        },
      ],
    },
    {
      id: "ozone_autohemo_es",
      name: "Consentimiento Autohemotransfusión con Ozono",
      assetPath: "assets/pdf/ozone_autohemo_es.pdf",
      fields: [
        {
          key: "fullName",
          label: "Nombre y apellidos del paciente",
          pageIndex: 0,
          x: 101,
          y: 615,
          fontSize: 11,
          maxLength: 100,
          required: true,
        },
        {
          key: "age",
          label: "Edad del paciente",
          pageIndex: 0,
          x: 69,
          y: 604,
          fontSize: 11,
          maxLength: 3,
          required: true,
        },
        {
          key: "dni",
          label: "DNI del paciente",
          pageIndex: 0,
          x: 221,
          y: 604,
          fontSize: 11,
          maxLength: 20,
          required: true,
        },
        {
          key: "legalRepresentativeName",
          label: "Nombre y apellidos del representante legal",
          pageIndex: 0,
          x: 133,
          y: 549,
          fontSize: 10,
          maxLength: 100,
        },
        {
          key: "legalRepresentativeAge",
          label: "Edad del representante legal",
          pageIndex: 0,
          x: 57,
          y: 539,
          fontSize: 10,
          maxLength: 3,
        },
        {
          key: "legalRepresentativeDni",
          label: "DNI del representante legal",
          pageIndex: 0,
          x: 198,
          y: 539,
          fontSize: 10,
          maxLength: 20,
        },
        {
          key: "legalRepresentativeRole",
          label: "Tipo de representante legal",
          pageIndex: 0,
          x: 340,
          y: 539,
          inputType: "select",
          options: ["Representante legal", "Familiar", "Allegado"],
          fontSize: 10,
          maxLength: 40,
        },
        {
          key: "date",
          label: "Fecha (dd/mm/aaaa)",
          pageIndex: 0,
          x: 114,
          y: 126,
          fontSize: 12,
          maxLength: 10,
          required: true,
        },
      ],
    },
  ];

  constructor(
    private readonly pdfService: PdfService,
    private readonly http: HttpClient
  ) {}

  generateWithJsPDF(
    patient: PatientDto,
    medicalRecords: MedicalRecordDto[],
    previousRecords: PreviousRecordListDto[]
  ): jsPDF {
    return this.pdfService.generatePatientPdf(
      patient,
      medicalRecords,
      previousRecords
    );
  }

  getTemplates(): PdfTemplateDefinition[] {
    return this.templates;
  }

  getTemplateById(templateId: string): PdfTemplateDefinition | undefined {
    return this.templates.find((template) => template.id === templateId);
  }

  async generateWithPdfLib(
    templateId: string,
    formData: Record<string, string>
  ): Promise<Blob> {
    const template = this.getTemplateById(templateId);
    if (!template) {
      throw new Error("No se encontró la plantilla seleccionada");
    }

    const templateBytes = await this.http
      .get(template.assetPath, { responseType: "arraybuffer" })
      .toPromise();

    const pdfDoc = await PDFDocument.load(templateBytes);
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const pages = pdfDoc.getPages();

    template.fields.forEach((field) => {
      const rawValue = formData[field.key] || "";
      const value = rawValue.toString().trim();
      if (!value) {
        return;
      }

      const page = pages[field.pageIndex];
      if (!page) {
        return;
      }

      page.drawText(value, {
        x: field.x,
        y: field.y,
        size: field.fontSize || 10,
        font,
        color: rgb(0, 0, 0),
      });
    });

    const filledPdf = await pdfDoc.save();
    const filledPdfBytes = new Uint8Array(filledPdf.byteLength);
    filledPdfBytes.set(filledPdf);
    return new Blob([filledPdfBytes], { type: "application/pdf" });
  }
}
