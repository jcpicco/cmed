
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private apiUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) { }

    /**
     * Send PDF via email
     */
    sendPdfEmail(patientId: string, pdfBlob: Blob): Observable<any> {
        const formData = new FormData();
        formData.append('file', pdfBlob, 'historia_clinica.pdf');

        return this.http.post(`${this.apiUrl}/patients/${patientId}/email-pdf`, formData);
    }
}
