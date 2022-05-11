import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../model/invoice';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  SERVER = 'http://127.0.0.1:5000'

  private invoiceList: Invoice[] = [];

  constructor(private http: HttpClient) {

  }

  getInvoice(fecha_inicio: string, fecha_fin: string): Observable<Invoice[]> {
    var config = {
      params: {
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin
      }
    }

    return this.http.get<Invoice[]>(this.SERVER + "/invoice", config)
  }
    
}
