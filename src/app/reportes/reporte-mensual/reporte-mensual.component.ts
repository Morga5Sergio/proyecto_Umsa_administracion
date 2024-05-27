import { Component } from '@angular/core';
import { PdfMakeWrapper,Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.scss']
})
export class ReporteMensualComponent {
  listProductos: any[] = [];

  generatePDF(){
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('producto.nombre').bold().italics().end
    );
    pdf.create().open();
    const pdf1 = new PdfMakeWrapper();
    pdf.userPassword('123');
  }

}
