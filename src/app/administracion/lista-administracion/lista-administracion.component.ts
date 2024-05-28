import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-administracion',
  templateUrl: './lista-administracion.component.html',
  styleUrls: ['./lista-administracion.component.scss']
})
export class ListaAdministracionComponent implements AfterViewInit {
  
  swisVisible = false;
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

  
  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) {
      this.arrPokemon = [];
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
    /* this.selection.isSelected
    console.log("Seleccionado ==> " ,  this.selection.isSelected); */
    // this.ELEMENT_DATA2 = this.selection.isSelected;
    /* this.authService.isPokemon().subscribe(
      (response) => {
        console.log("Entra Aqui");
        console.log(response);
      }
    ); */
/* 
    this.authService.isExamplePost({title:"foo", body:"bar", userId:1}).subscribe(
      (response) => {
        console.log("Entra Aqui - Maribel");
        console.log(response);
      }
    ); */

    this.authService.isPokemon().subscribe(
      (response) => {
        console.log("Entra Aqui - Maribel - GET Pokemon");
        console.log(response);
        // this.dataSourceDocente = response 
         // this.arrPokemon =  response;
      }
    );
    /* if (this.paginator2) {
      this.dataSourceDocente.paginator = this.paginator2;
      console.log("Ingresa Aqui");
    }else {
      console.log("Ingresa Aqui false");
    } */
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
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
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

