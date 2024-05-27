import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-administracion',
  templateUrl: './lista-administracion.component.html',
  styleUrls: ['./lista-administracion.component.scss']
})
export class ListaAdministracionComponent implements AfterViewInit {
  
  swisVisible = false;
  displayedColumns: string[] = ['select', 'position', 'docente', 'cantidad_materias'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild('paginator1', { static: true }) paginator?: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2?: MatPaginator;


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

  ngOnChanges(changes: SimpleChanges) {
    console.log("Entra aqui");
    if (changes['data']) {
      const change = changes['data'];
      console.log('Previous value:', change.previousValue);
      console.log('Current value:', change.currentValue);
      console.log('First change:', change.firstChange);
    }

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

  // Seccion buscador docentes, 
  displayedColumnsDocente: string[] = ['cnt', 'name', 'dia', 'hrIngreso','hrSalida','hrMarcadoIng','hrMarcadoSlda','tipo','materia','minutoAtraso'];
  dataSourceDocente = new MatTableDataSource<Docente>(ELEMENT_DATA_DOCENTE);

  listDocenteVisibility(){
    this.swisVisible = !this.swisVisible;


    if (this.paginator2) {
      this.dataSourceDocente.paginator = this.paginator2;
      console.log("Ingresa Aqui");
    }else {
      console.log("Ingresa Aqui false");
    }
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

