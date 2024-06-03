import { Component } from '@angular/core';
import { Columns, PdfMakeWrapper,Table,Txt, Ul } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.scss']
})
export class ReporteMensualComponent {
  mesSeleccionado?: string= 'AGOSTO';
  gestionSeleccionado: string='2019';
  predioSeleccionado: string ='ADM. EMPRESAS - MONOBLOCK CENTRAL';
  pdfData: any;
  listaAsistencia?: PeriodicElement[];
  columnHeaders = ['Nombre', 'Fecha','Dia', 'Turno','Hora Ingreso','Hora Salida','Ingreso marcado', 'Salida marcado', 'Atraso', 'Materia'];
  dataLista?: any;
  dataObservaciones?: any;
  

  ngOnInit(){
    //cargar lista de asistencia
    this.cargarListaAsistencia();
    this.cargarObservaciones();
    let uniqueNames = new Map();
    let listaSemestre = this.listaAsistencia?.filter(item => {
      if (!uniqueNames.has(item.semestre)) {
        uniqueNames.set(item.semestre, true);
        return true;
      }
      return false;
    });
    console.log(listaSemestre);

    this.generarPDFMensualKarla(listaSemestre);
  }

  cargarObservaciones(){
    this.dataObservaciones=['24 de Diciembre suspención de clases', '25 de diciembre navidad', '31 de diciembre suspencion de clases',
      '1 de enero año nuevo', '4 de enero recupero clases'
    ];
  }

  
  cargarListaAsistencia(){
    this.listaAsistencia=[
      {
        cnt: 1, name: 'Albarracin Paredes Nelson', dia: "Martes", fecha: "12/20/2020", hroIngreso: '08:30', hroSalida: '12.30', hroMarcadoIngreso: '08:10', hroMarcadoSalida: '12:32', tipo: 'Atraso', materia: "M2344", minutoAtraso: "2", semestre: "4to semestre",
        turno: 'Turno Mañana'
      },
      {
        cnt: 1, name: 'Albarracin Paredes Nelson', dia: "Martes", fecha: "12/20/2020", hroIngreso: '08:30', hroSalida: '12.30', hroMarcadoIngreso: '08:10', hroMarcadoSalida: '12:32', tipo: 'Atraso', materia: "M2344", minutoAtraso: "2", semestre: "2do semestre",
        turno: 'Turno Mañana'
      },
      {
        cnt: 1, name: 'Albarracin Paredes Nelson', dia: "Martes", fecha: "12/20/2020", hroIngreso: '08:30', hroSalida: '12.30', hroMarcadoIngreso: '08:10', hroMarcadoSalida: '12:32', tipo: 'Atraso', materia: "M2344", minutoAtraso: "2", semestre: "1er semestre",
        turno: 'Turno Tarde'
      },
      {
        cnt: 1, name: 'Albarracin Paredes Nelson', dia: "Martes", fecha: "12/20/2020", hroIngreso: '08:30', hroSalida: '12.30', hroMarcadoIngreso: '08:10', hroMarcadoSalida: '12:32', tipo: 'Atraso', materia: "M2344", minutoAtraso: "2", semestre: "5to semestre",
        turno: 'Turno Tarde'
      },
      {
        cnt: 1, name: 'Albarracin Paredes Nelson', dia: "Martes", fecha: "12/20/2020", hroIngreso: '08:30', hroSalida: '12.30', hroMarcadoIngreso: '08:10', hroMarcadoSalida: '12:32', tipo: 'Atraso', materia: "M2344", minutoAtraso: "2", semestre: "4to semestre",
        turno: 'Turno Tarde'
      },
    ];
  }

  generarPDFMensualKarla( listaSemestre: any) {
    console.log("PdfMensual entra aqui");

    const pdfMaker = new PdfMakeWrapper();
    pdfMaker.pageOrientation('landscape');
    
    pdfMaker.add(pdfMaker.ln(1));
    pdfMaker.add(new Txt('CARRERA DE ADMINISTRACIÓN DE EMPRESAS').alignment('center').bold().end);
    pdfMaker.add(pdfMaker.ln(1));
    pdfMaker.add(new Txt('ASISTENCIA DEL MES DE  '+this.mesSeleccionado+' DE '+this.gestionSeleccionado+' PREDIO '+this.predioSeleccionado).alignment('center').bold().end);
    pdfMaker.add(new Txt('Turno 1 - Ingreso: ').alignment('center').fontSize(10).lineHeight(1).end);
    pdfMaker.add(new Txt('Turno 2 - Ingreso: ').alignment('center').fontSize(10).lineHeight(1).end);
    pdfMaker.add(new Txt('Turno 3 - Ingreso: ').alignment('center').fontSize(10).lineHeight(1).end);
    pdfMaker.add(new Txt('Turno 4 - Ingreso: ').alignment('center').fontSize(10).lineHeight(1).end);
    pdfMaker.add(pdfMaker.ln(1));
    
    if(listaSemestre!= null && this.listaAsistencia!=null)
    for (let index = 0; index < listaSemestre?.length; index++) {
  
      //filtrar por semestre 
      let item = listaSemestre[index];

      //filtrar por semestre
      var listaDocenteFiltrado = this.listaAsistencia.filter(function(asistencia){
        return asistencia.semestre == item.semestre;
      });

      this.dataLista= listaDocenteFiltrado.map(item => [
        item.name, 
        item.fecha, 
        item.dia,
        item.turno,
        item.hroIngreso, 
        item.hroSalida,
        item.hroMarcadoIngreso, 
        item.hroMarcadoSalida, 
        item.minutoAtraso, 
        item.materia]);

      pdfMaker.add(pdfMaker.ln(1));
      pdfMaker.add(new Txt('Semestre: '+item.semestre).fontSize(10).end);
      pdfMaker.add(pdfMaker.ln(1));
  
      pdfMaker.add(
        new Table([this.columnHeaders, ...this.dataLista])
        .alignment('center')
        .layout({
          fillColor: (rowIndex) => {
              // row 0 is the header
              if (rowIndex === 0) {
                return '#d0e0e3';
              }
      
              return '#ffffff';
          }
      })
        .fontSize(12)
        .alignment('center').end
      );
  
      pdfMaker.add(pdfMaker.ln(1));  

      pdfMaker.add(new Txt('OBSERVACIONES').bold().end);

      pdfMaker.add(pdfMaker.ln(1));
  
      pdfMaker.add(new Ul(this.dataObservaciones).end);    

    }
    

    let objetoIfram = document.getElementById('tagDataPdfMensual');

    const pdfGEnerado= pdfMaker.create();
    pdfGEnerado.getBase64((data) => {
      console.log("Entra Aqui Generadov sdfsd");
      console.log(data);
      this.pdfData = data;
      if (objetoIfram != null) {
        objetoIfram.setAttribute('src', 'data:application/pdf;base64, ' + data);
      }else {
        console.log("Entra error aqui");
      }
    });
  }
}

export interface PeriodicElement {
  cnt: number;
  name: string;
  fecha: string;
  hroIngreso: string;
  hroSalida: string;
  hroMarcadoIngreso: string;
  hroMarcadoSalida: string;
  dia: string;
  tipo: string;
  materia: string;
  minutoAtraso: string;
  semestre: string;
  turno: string;
}
