import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Invoice } from '../model/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceList: Invoice[] = [];
  Invoices: Invoice[] = [];
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  fecha_inicio: string = ""
  fecha_fin: string = ""

  constructor(private invoiceService: InvoiceService, private chRef: ChangeDetectorRef) { }

  ngOnInit(): void {        
    
  }


  getInvoices(){

    this.invoiceList = []

    this.invoiceService.getInvoice(this.fecha_inicio,this.fecha_fin)    
    .subscribe(invoice_arr => {
      
      this.invoiceList = invoice_arr as Invoice[]

      this.collectionSize = this.invoiceList.length;

      this.refreshInvoice()
            
    })    
    
  }

  /* PAGINACION */
  refreshInvoice() {
    this.Invoices = this.invoiceList
      .map((invoice, i) => ({idp: i + 1, ...invoice}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

      this.chRef.detectChanges();
  }
  /* PAGINACION */
  

}
