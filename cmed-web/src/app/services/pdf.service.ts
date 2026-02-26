
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

        const textColor: [number, number, number] = [0, 0, 0];

        // --- Header Section ---
        try {
            // Logo
            doc.addImage('assets/logo.png', 'PNG', 15, 10, 30, 0);
        } catch (e) {
            console.error('Error loading logo', e);
        }

        // Title 
        doc.setFontSize(22);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.setFont('helvetica', 'bold');
        doc.text('INFORME CLÍNICO', 60, 25);


        // Date
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const today = new Date();
        const dateStr = formatDate(today, 'dd/MM/yyyy', 'en-US');
        doc.text(`Fecha de emisión: ${dateStr}`, pageWidth - 15, 25, { align: 'right' });

        // Add a separation line
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        doc.line(15, 35, pageWidth - 15, 35);

        let yPos = 45;
        const margin = 15;

        // --- Patient Info Section ---
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
                fillColor: [255, 255, 255],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.1
            },
            columnStyles: {
                0: { cellWidth: 50, fontStyle: 'bold', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
                1: { cellWidth: 'auto', textColor: [0, 0, 0], fillColor: [255, 255, 255] }
            },
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
                fontSize: 10,
                textColor: [0, 0, 0]
            }
        });

        // @ts-ignore
        yPos = doc.lastAutoTable.finalY + 15;

        // --- Medical Records Section ---
        if (medicalRecords && medicalRecords.length > 0) {

            // Section Title
            doc.setFontSize(14);
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('HISTORIA CLÍNICA', margin, yPos);
            yPos += 5;

            medicalRecords.forEach((record, index) => {
                const tableBody: any[] = [];

                // Block Header (Date)
                tableBody.push([
                    { content: 'FECHA DE CONSULTA', styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } },
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } }
                ]);

                // Description
                tableBody.push([
                    { content: 'DESCRIPCIÓN', styles: { fontStyle: 'bold' } },
                    { content: record.description }
                ]);

                // Antecedentes
                if (record.background) {
                    tableBody.push([
                        { content: 'ANTECEDENTES', styles: { fontStyle: 'bold' } },
                        { content: record.background }
                    ]);
                }

                // Valoraciones
                if (record.notes && record.notes.length > 0) {
                    const valoraciones = record.notes.map(n => `• ${n.description}`).join('\n');
                    tableBody.push([
                        { content: 'VALORACIONES', styles: { fontStyle: 'bold' } },
                        { content: valoraciones }
                    ]);
                }

                // Diagnosticos
                if (record.diagnoses && record.diagnoses.length > 0) {
                    record.diagnoses.forEach((d, indexDiag) => {
                        // Add a blank separation row before each diagnosis (including the first one)
                        tableBody.push([{
                            content: '',
                            colSpan: 2,
                            styles: { cellPadding: 0, minCellHeight: 4, fillColor: [255, 255, 255] }
                        }]);

                        const isMultiple = record.diagnoses.length > 1;
                        const diagLabel = isMultiple ? `DIAGNÓSTICO ${indexDiag + 1}` : 'DIAGNÓSTICO';

                        tableBody.push([
                            { content: diagLabel, styles: { fontStyle: 'bold' } },
                            { content: d.description }
                        ]);

                        if (d.protocol) {
                            tableBody.push([
                                { content: 'CONDUCTA', styles: { fontStyle: 'bold' } },
                                { content: d.protocol }
                            ]);
                        }

                        // Emphasize Treatment
                        if (d.prescription) {
                            tableBody.push([
                                { content: 'TRATAMIENTO', styles: { fontStyle: 'bold', fontSize: 10 } },
                                { content: d.prescription, styles: { fontStyle: 'bold', fontSize: 10 } }
                            ]);
                        }
                    });
                } else {
                    tableBody.push([
                        { content: 'DIAGNÓSTICOS', styles: { fontStyle: 'bold' } },
                        { content: 'Sin diagnósticos.' }
                    ]);
                }

                autoTable(doc, {
                    startY: yPos,
                    head: [],
                    body: tableBody,
                    theme: 'grid',
                    styles: {
                        fontSize: 9,
                        cellPadding: 4,
                        valign: 'top',
                        lineColor: [0, 0, 0],
                        lineWidth: 0.1,
                        textColor: [0, 0, 0],
                        fillColor: [255, 255, 255]
                    },
                    columnStyles: {
                        0: { cellWidth: 50, textColor: [0, 0, 0] },
                        1: { cellWidth: 'auto', textColor: [0, 0, 0] }
                    },
                    margin: { left: margin, right: margin }
                });

                // @ts-ignore
                yPos = doc.lastAutoTable.finalY + 10; // Extra spacing between tables
            });
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
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.setFont('helvetica', 'bold');
            doc.text('ANTECEDENTES MÉDICOS', margin, yPos);
            yPos += 5;

            const prevRecordsTableBody: any[] = [];

            previousRecords.forEach((record, index) => {
                // Add a spacer row if not the first item
                if (index > 0) {
                    prevRecordsTableBody.push([{ content: '', colSpan: 2, styles: { cellPadding: 2, fillColor: [255, 255, 255] } }]);
                }

                // Block Header (Date)
                prevRecordsTableBody.push([
                    { content: 'FECHA DE REGISTRO', styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } },
                    { content: formatDate(record.createdAt, 'dd/MM/yyyy', 'en-US'), styles: { fontStyle: 'bold', fillColor: [255, 255, 255] } }
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
                    lineColor: [0, 0, 0],
                    lineWidth: 0.1,
                    textColor: [0, 0, 0],
                    fillColor: [255, 255, 255]
                },
                columnStyles: {
                    0: { cellWidth: 50, textColor: [0, 0, 0] },
                    1: { cellWidth: 'auto', textColor: [0, 0, 0] }
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
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            doc.text(`Página ${i} de ${pageCount}`, pageWidth / 2, doc.internal.pageSize.height - 10, { align: 'center' });
        }

        return doc;
    }
}
