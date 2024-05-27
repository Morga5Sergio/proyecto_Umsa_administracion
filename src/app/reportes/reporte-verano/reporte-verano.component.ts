import { Component } from '@angular/core';
import { Columns, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reporte-verano',
  templateUrl: './reporte-verano.component.html',
  styleUrls: ['./reporte-verano.component.scss']
})
export class ReporteVeranoComponent {
  pdfData: any;
  fechaInicio: any="20 de diciembre de 2022";
  fechaFin: any="8 de enero de 2023";
  gestionInicio: any="2022";
  gestionFin: any="2022";
  predioSeleccionado: any="EDIF. NAVA MORALES Y PANDO";
  horarioSeleccionado: any="16:30 - 20:30";
  listaAsistenciaVerano?: any[];

  columnHeaders = ['Nombre', 'Fecha','Ingreso Turno', 'Salida Turno', 'Atraso', 'Cumplimiento de carga horaria', 'Observaciones'];
  dataLista?: any;
  dataObservaciones?: any;
  ngOnInit() {
    //cargar lista asistencia
    this.cargarAsistencia();
    this.cargarObservaciones();
    this.generarPDFKArla();
  }

  cargarObservaciones(){
    this.dataObservaciones=['24 de Diciembre suspención de clases', '25 de diciembre navidad', '31 de diciembre suspencion de clases',
      '1 de enero año nuevo', '4 de enero recupero clases'
    ];
  }

  cargarAsistencia(){
    this.listaAsistenciaVerano=[
      {cnt:1,nombre:'ROLANDO JESUS MAGNE SINGURI', fecha:new Date(), 
      horaIngreso:'3:20:44 PM', horaSalida:'7:02:55 PM', minutosAtraso:'0:00:00',cargaHoraria:'FALTA 56:21', observaciones:'LICENCIA CENA'},
      {cnt: '2',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '3',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '4',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '5',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '6',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '7',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '8',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '9',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '10',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '11',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '12',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
      {cnt: '13',nombre: 'ROLANDO JESUS MAGNE SINGURI',fecha: new Date(),horaIngreso: '3:22:44 PM',horaSalida: '7:02:55 PM', 
      minutosAtraso: '0:00:00',cargaHoraria: 'FALTA 00:31:20',observaciones: 'RECUPERAR 3:21:22 HRS.'},
    ];
    
    //esto no se modifica
    this.dataLista = this.listaAsistenciaVerano.map(item => [
      item.nombre, 
      item.fecha, 
      item.horaIngreso, 
      item.horaSalida, 
      item.minutosAtraso, 
      item.cargaHoraria,
      item.observaciones]);
  }

  generarPDFKArla() {
    const pdfMaker = new PdfMakeWrapper();
    pdfMaker.pageOrientation('landscape');
    pdfMaker.add(new Columns([
      new Txt('Del '+this.fechaInicio+' al '+this.fechaFin+'. ').alignment('left').fontSize(10).end,
      new Txt('Anexo 1').alignment('right').fontSize(10).end
  ]).end);
    pdfMaker.add(pdfMaker.ln(1));
    pdfMaker.add(new Txt('CARRERA DE ADMINISTRACIÓN DE EMPRESAS').alignment('center').bold().end);
    pdfMaker.add(pdfMaker.ln(1));
    pdfMaker.add(new Txt('ASISTENCIA DE CURSO DE VERANO '+this.gestionInicio+' - '+this.gestionFin).alignment('center').end);
    pdfMaker.add(new Txt('CURSO DE VERANO ').alignment('center').lineHeight(1).end);
    pdfMaker.add(pdfMaker.ln(1));
    pdfMaker.add(new Txt('Hora de ingreso: '+this.horarioSeleccionado).fontSize(10).alignment('left').end);
    pdfMaker.add(pdfMaker.ln(1));

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

    var dd = {
      content: [
        
        {
          columns: [
            {
              width: 450,
              float: 'left',
              text: 'Del '+this.fechaInicio+' al '+this.fechaFin+'. '
            },
            {
              float: 'right',
              text: 'Anexo.\n\n'
            },
            
          ]
        },
        
        { text: 'CARRERA DE ADMINISTRACIÓN DE EMPRESAS\n\n', bold:true,fontSize: 18},
        { text: 'ASISTENCIA DE CURSO DE VERANO '+this.gestionInicio+' - '+this.gestionFin+' PREDIO '+this.predioSeleccionado, bold:true,fontSize: 13,Alignment:"center"},
        { text: 'CURSO DE VERANO\n\n', bold:true,fontSize: 13},
        
        {
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ['width=100', 'star-sized', 'width=200', 'star-sized'],
              ['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
            ]
          }
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: 'Subheader 2 - using subheader style',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          alignments:"center",
          text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
          style: ['quote', 'small']
        }
      ],
      styles: {
        leftk: {
          width: 50,
          float:'left',
          bold: true
        },
        rightk: {
          width: 50,
          float:'right',
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }
      
    }
    //pdfMaker.add(dd);
    let objetoIfram = document.getElementById('tagDataPdf');

    const pdfDocGenerator = pdfMake.createPdf(dd);
    const pdfGEnerado= pdfMaker.create();
    pdfGEnerado.getBase64((data) => {
      console.log(data);
      this.pdfData = data;
      if (objetoIfram != null) {
        objetoIfram.setAttribute('src', 'data:application/pdf;base64, ' + data);
      }
    });
  }

}

export interface Asitencia {
  cnt: number;
  nombre: string;
  fecha: Date;
  horaIngreso: string;
  horaSalida: string;
  minutosAtraso: string;
  cargaHoraria: string;
  observaciones: string;
}


