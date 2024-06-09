import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DataServicioService } from 'src/app/servicioDatos/data-servicio.service';
import { ReporteMensual } from 'src/app/interfaces/reporte-mensual';
import { Columns, PdfMakeWrapper,Table,Txt, Ul } from 'pdfmake-wrapper';
@Component({
  selector: 'app-lista-administracion',
  templateUrl: './lista-administracion.component.html',
  styleUrls: ['./lista-administracion.component.scss']
})
export class ListaAdministracionComponent implements AfterViewInit {
  @Input() datos: any;
  fechaDelSistema: Date;
  swisVisible = false;
  id: string;
  /*Seccion Uno */ 
  displayedColumns: string[] = ['select', 'position', 'docente', 'cantidad_materias'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  arrPokemon: string[];
  // Seccion buscador docentes, 
  displayedColumnsDocente: string[] = ['cnt', 'name', 'dia', 'hrIngreso','hrSalida','hrMarcadoIng','hrMarcadoSlda','tipo','materia','minutoAtraso'];
  dataSourceDocente = new MatTableDataSource<Docente>(ELEMENT_DATA_DOCENTE);

  @ViewChild('paginator1', { static: true }) paginator?: MatPaginator;
  @ViewChild('paginator2') paginator2?: MatPaginator;


  ngAfterViewInit(): void {
    console.log("Ingresa Aqui pagiandor", this.paginator );
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      console.log("Ingresa Aqui");
    }else {
      console.log("Ingresa Aqui false");
    }
    if (this.paginator2) {
      this.dataSourceDocente.paginator = this.paginator2;
      console.log("Ingresa Aqui");
    }else {
      console.log("Ingresa Aqui false");
    }
  }



  
  constructor(private cdr: ChangeDetectorRef, 
              private authService: AuthService, 
              private route: ActivatedRoute,
              private dataService: DataServicioService) {
      this.fechaDelSistema = new Date();
      this.arrPokemon = [];
      this.id = "";
   }
   async  ngOnInit() {
    this.fechaDelSistema = new Date();
    console.log("Fecha del sistema==>" + this.fechaDelSistema);
    this.id = this.route.snapshot.params['id'];
    console.log('ID:', this.id);
    await  this.enviarDatos();
   }

   obtenerFechaFormateada(): string {
    return this.fechaDelSistema.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }

   async  enviarDatos() {
    console.log("Cuantas veces entra aqui");
    const datos = { id:this.id };
    await this.dataService.actualizarDatos(datos);
  }



  ngAfterViewChecked() {
    if (this.swisVisible && this.paginator2 && !this.dataSourceDocente.paginator) {
      this.dataSourceDocente.paginator = this.paginator2;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }
  }

  listDocenteVisibility(){
    // Una validacion, que cuando lo check esten vacion tiene que seguir no visible
    this.swisVisible = !this.swisVisible;
    this.cdr.detectChanges();
    this.initPaginator2();

    console.log('Selected elements:', this.selection.selected);


    this.authService.isPokemon().subscribe(
      (response) => {
        console.log("Entra Aqui - Maribel - GET Pokemon");
        console.log(response);
        // this.dataSourceDocente = response 
         // this.arrPokemon =  response;
      }
    );
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onRowCheckboxChange(row: PeriodicElement) {
    this.selection.toggle(row);
  }


  async initPaginator2() {
    console.log("Resuelve ==> " + this.paginator2)
    while (!this.paginator2) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Espera 100ms y reintenta
    }
    this.dataSourceDocente.paginator = this.paginator2;
    this.cdr.detectChanges(); // Forzar la detección de cambios después de asignar el paginador
    console.log("Asignado paginador2");
  }
 
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ELEMENT_DATA2: PeriodicElement[] = [];
  

  // Codigo para impresion 
  mesSeleccionado?: string= 'AGOSTO';
  gestionSeleccionado: string='2019';
  predioSeleccionado: string ='ADM. EMPRESAS - MONOBLOCK CENTRAL';
  pdfData: any;
  listaAsistencia?: ReporteMensual[];
  columnHeaders = ['Nombre', 'Fecha','Dia', 'Turno','Hora Ingreso','Hora Salida','Ingreso marcado', 'Salida marcado', 'Atraso', 'Materia'];
  dataLista?: any;
  dataObservaciones?: any;

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

  imprimir():void{
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

    this.generarPDFMensual(listaSemestre);
  }

  generarPDFMensual( listaSemestre: any) {
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
    pdfGEnerado.download("Archivo.pdf")
    /* pdfGEnerado.getBase64((data) => {
      console.log("Entra Aqui Generadov sdfsd");
      console.log(data);
      this.pdfData = data;
      if (objetoIfram != null) {
        objetoIfram.setAttribute('src', 'data:application/pdf;base64, ' + data);
      }else {
        console.log("Entra error aqui");
      }
    }); */
  
  }

}

export interface PeriodicElement {
  position: number;
  docente: string;
  cantidad_materia: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, docente: 'marco', cantidad_materia: 2},
  {position: 2, docente: 'marco', cantidad_materia: 4 },
  {position: 3, docente: 'marco', cantidad_materia: 2 },
  {position: 4, docente: 'marco', cantidad_materia: 5 },
  {position: 5, docente: 'marco', cantidad_materia: 2},
  {position: 6, docente: 'marco', cantidad_materia: 2},
  {position: 7, docente: 'marco', cantidad_materia: 8},
  {position: 8, docente: 'marco', cantidad_materia: 2},
  {position: 9, docente: 'marco', cantidad_materia: 5},
  {position: 10, docente: 'marco', cantidad_materia: 1 },
  {position: 1, docente: 'marco', cantidad_materia: 2},
  {position: 2, docente: 'marco', cantidad_materia: 4 },
  {position: 3, docente: 'marco', cantidad_materia: 2 },
  {position: 4, docente: 'marco', cantidad_materia: 5 },
  {position: 5, docente: 'marco', cantidad_materia: 2},
  {position: 6, docente: 'marco', cantidad_materia: 2},
  {position: 7, docente: 'marco', cantidad_materia: 8},
  {position: 8, docente: 'marco', cantidad_materia: 2},
  {position: 9, docente: 'marco', cantidad_materia: 5},
  {position: 10, docente: 'marco', cantidad_materia: 1 },
  {position: 1, docente: 'marco', cantidad_materia: 2},
  {position: 2, docente: 'marco', cantidad_materia: 4 },
  {position: 3, docente: 'marco', cantidad_materia: 2 },
  {position: 4, docente: 'marco', cantidad_materia: 5 },
  {position: 5, docente: 'marco', cantidad_materia: 2},
  {position: 6, docente: 'marco', cantidad_materia: 2},
  {position: 7, docente: 'marco', cantidad_materia: 8},
  {position: 8, docente: 'marco', cantidad_materia: 2},
  {position: 9, docente: 'marco', cantidad_materia: 5},
  {position: 10, docente: 'marco', cantidad_materia: 1 },
  {position: 1, docente: 'marco', cantidad_materia: 2},
  {position: 2, docente: 'marco', cantidad_materia: 4 },
  {position: 3, docente: 'marco', cantidad_materia: 2 },
  {position: 4, docente: 'marco', cantidad_materia: 5 },
  {position: 5, docente: 'marco', cantidad_materia: 2},
  {position: 6, docente: 'marco', cantidad_materia: 2},
  {position: 7, docente: 'marco', cantidad_materia: 8},
  {position: 8, docente: 'marco', cantidad_materia: 2},
  {position: 9, docente: 'marco', cantidad_materia: 5},
  {position: 10, docente: 'marco', cantidad_materia: 1 },
  {position: 1, docente: 'marco', cantidad_materia: 2},
  {position: 2, docente: 'marco', cantidad_materia: 4 },
  {position: 3, docente: 'marco', cantidad_materia: 2 },
  {position: 4, docente: 'marco', cantidad_materia: 5 },
  {position: 5, docente: 'marco', cantidad_materia: 2},
  {position: 6, docente: 'marco', cantidad_materia: 2},
  {position: 7, docente: 'marco', cantidad_materia: 8},
  {position: 8, docente: 'marco', cantidad_materia: 2},
  {position: 9, docente: 'marco', cantidad_materia: 5},
  {position: 10, docente: 'marco', cantidad_materia: 1 },
];

export interface Docente {
  cnt: number;
  name: string;
  hroIngreso: string;
  hroSalida: string;
  hroMarcadoIngreso: string;
  hroMarcadoSalida: string;
  dia: String;
  tipo: String;
  materia: String;
  minutoAtraso: String;
}

const ELEMENT_DATA_DOCENTE: Docente[] = [
  {cnt: 1, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 2, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 3, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 4, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 5, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 6, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 7, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 8, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 9, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 10, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 1, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 2, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 3, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 4, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 5, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 6, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 7, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 8, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 9, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 10, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 1, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 2, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 3, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 4, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 5, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 6, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 7, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 8, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 9, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"},
  {cnt: 10, name: '23-05-2023', dia: "Martes", hroIngreso: '10:30', hroSalida: '18.30', hroMarcadoIngreso:'08:10', hroMarcadoSalida: '18:30', tipo:'Atraso', materia:"M2344",minutoAtraso:"2"}
  ];

