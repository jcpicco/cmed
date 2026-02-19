
import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PatientDto } from '../models/patient.model';
import { MedicalRecordListDto, MedicalRecordDto } from '../models/medical-record.model';
import { PreviousRecordListDto } from '../models/previous-record.model';
import { formatDate } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() { }

    /**
     * Generar PDF con los datos del paciente y registros seleccionados
     */
    public generatePatientPdf(
        patient: PatientDto,
        medicalRecords: MedicalRecordDto[],
        previousRecords: PreviousRecordListDto[]
    ): jsPDF {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;

        // Colors
        const primaryColor: [number, number, number] = [44, 62, 80]; // Dark Slate Blue
        const accentColor: [number, number, number] = [52, 152, 219]; // Light Blue
        const grayColor: [number, number, number] = [127, 140, 141]; // Gray

        // --- Header Section ---
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, pageWidth, 40, 'F');

        // Logo Background (White)
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(10, 5, 40, 30, 3, 3, 'F');

        // Logo
        try {
            // Centering logo vertically roughly in the box (y=5 to y=35)
            // y=11 gives 6px padding top (relative to box start), suitable for aspect ratios ~2:1 to 3:1
            doc.addImage('assets/logo.png', 'PNG', 15, 11, 30, 0);
        } catch (e) {
            console.error('Error loading logo', e);
        }

        // Title (Centered vertically relative to 40px header)
        doc.setFontSize(22);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.text('INFORME CLÍNICO', 60, 25);


        // Date
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const today = new Date();
        const dateStr = formatDate(today, 'dd/MM/yyyy', 'en-US');
        doc.text(`Fecha de emisión: ${dateStr}`, pageWidth - 15, 25, { align: 'right' });

        let yPos = 50;
        const margin = 15;

        // --- Patient Info Section ---
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.1);

        // We use autoTable for layout of patient info to look like a grid form
        autoTable(doc, {
            startY: yPos,
            head: [['DATOS DEL PACIENTE', '']],
            body: [
                ['Nombre Completo', `${patient.lastName}, ${patient.name}`],
                ['DNI', `${patient.dni}`],
                ['Fecha de Nacimiento', `${formatDate(patient.birthDate, 'dd/MM/yyyy', 'en-US')}`],
                ['Teléfono', `${patient.phone || 'No indicado'}`],
                ['Alergias', `${patient.allergies || 'Sin alergias registradas'}`]
            ],
            theme: 'grid',
            headStyles: {
                fillColor: [240, 240, 240],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
                lineColor: [200, 200, 200]
            },
            columnStyles: {
                0: { cellWidth: 50, fontStyle: 'bold', fillColor: [250, 250, 250] },
                1: { cellWidth: 'auto' }
            },
            styles: {
                lineColor: [200, 200, 200],
                lineWidth: 0.1,
                fontSize: 10
            }
        });

        // @ts-ignore
        yPos = doc.lastAutoTable.finalY + 15;

        // --- Medical Records Section ---
        if (medicalRecords && medicalRecords.length > 0) {

            // Section Title
            doc.setFontSize(14);
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('HISTORIA CLÍNICA', margin, yPos);
            yPos += 5;

            const tableBody: any[] = [];

            medicalRecords.forEach((record, index) => {
                // Formatting content
                const valoraciones = record.notes && record.notes.length > 0
                    ? record.notes.map(n => `• ${n.description}`).join('\n')
                    : 'Sin valoraciones.';

                const diagnosticos = record.diagnoses && record.diagnoses.length > 0
                    ? record.diagnoses.map(d => {
                        let text = `• ${d.description}`;
                        if (d.prescription) text += `\n   Tratamiento: ${d.prescription}`;
                        if (d.protocol) text += `\n   Conducta: ${d.protocol}`;
                        return text;
                    }).join('\n')
                    : 'Sin diagnósticos.';

                // Add a spacer row if not the first item, to separate records
                if (index > 0) {
                    tableBody.push([{ content: '', colSpan: 2, styles: { cellPadding: 1, fillColor: [255, 255, 255] } }]);
                }

                // Row 1: Header/Date - Full width or labeled? 
                // User asked for "Row with first column: Fecha, Desc, Val, Diag".
                // Let's interpret "Fecha" as the first row of the block.

                // Block Header (Date)
                tableBody.push([
                    { content: 'FECHA DE CONSULTA', styles: { fontStyle: 'bold', fillColor: [240, 248, 255] } },
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [240, 248, 255] } }
                ]);

                // Description
                tableBody.push([
                    { content: 'ENFERMEDAD ACTUAL', styles: { fontStyle: 'bold' } },
                    { content: record.description }
                ]);

                // Valoraciones
                tableBody.push([
                    { content: 'VALORACIONES', styles: { fontStyle: 'bold' } },
                    { content: valoraciones }
                ]);

                // Diagnosticos
                tableBody.push([
                    { content: 'DIAGNÓSTICOS', styles: { fontStyle: 'bold' } },
                    { content: diagnosticos }
                ]);
            });

            autoTable(doc, {
                startY: yPos,
                // No header row needed as labels are in the first column
                head: [],
                body: tableBody,
                theme: 'grid',
                styles: {
                    fontSize: 9,
                    cellPadding: 4,
                    valign: 'top',
                    lineColor: [220, 220, 220],
                    lineWidth: 0.1
                },
                columnStyles: {
                    0: { cellWidth: 50, textColor: primaryColor }, // Labels column
                    1: { cellWidth: 'auto', textColor: [0, 0, 0] } // Content column
                },
                margin: { left: margin, right: margin }
            });

            // @ts-ignore
            yPos = doc.lastAutoTable.finalY + 15;
        }

        // --- Previous Records Section ---
        if (previousRecords && previousRecords.length > 0) {

            // Allow page break space
            if (yPos > doc.internal.pageSize.height - 40) {
                doc.addPage();
                yPos = 20;
            }

            // Section Title
            doc.setFontSize(14);
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('ANTECEDENTES MÉDICOS', margin, yPos);
            yPos += 5;

            const prevRecordsTableBody: any[] = [];

            previousRecords.forEach((record, index) => {
                // Add a spacer row if not the first item
                if (index > 0) {
                    prevRecordsTableBody.push([{ content: '', colSpan: 2, styles: { cellPadding: 1, fillColor: [255, 255, 255] } }]);
                }

                // Block Header (Date)
                prevRecordsTableBody.push([
                    { content: 'FECHA DE REGISTRO', styles: { fontStyle: 'bold', fillColor: [248, 248, 248] } }, // Slightly lighter gray than HC
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [248, 248, 248] } }
                ]);

                // Description
                prevRecordsTableBody.push([
                    { content: 'DESCRIPCIÓN', styles: { fontStyle: 'bold' } },
                    { content: record.description }
                ]);
            });

            autoTable(doc, {
                startY: yPos,
                head: [],
                body: prevRecordsTableBody,
                theme: 'grid',
                styles: {
                    fontSize: 9,
                    cellPadding: 4,
                    valign: 'top',
                    lineColor: [220, 220, 220],
                    lineWidth: 0.1
                },
                columnStyles: {
                    0: { cellWidth: 50, textColor: primaryColor }, // Labels column (Match HC color)
                    1: { cellWidth: 'auto', textColor: [0, 0, 0] } // Content column
                },
                margin: { left: margin, right: margin }
            });

            // @ts-ignore
            yPos = doc.lastAutoTable.finalY + 20;
        }

        // Footer
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(`Página ${i} de ${pageCount}`, pageWidth / 2, doc.internal.pageSize.height - 10, { align: 'center' });
        }

        return doc;
    }
}
