import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-personal-perfil',
  templateUrl: './personal-perfil.component.html',
  styleUrls: ['./personal-perfil.component.scss'],
})

export class PersonalPerfilComponent implements AfterViewInit {
  displayedColumns: string[] = ['cnt', 'name', 'dia', 'hrIngreso','hrSalida','hrMarcadoIng','hrMarcadoSlda','tipo','materia','minutoAtraso'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumnsDescrip: string[] = ['descrip', 'total'];
  dataSourceDescrip = new MatTableDataSource<elementDescripcion>(elemntDescripcion);
  // dataSourceDescrip = ELEMENT_DATA;
  //@ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}

export interface elementDescripcion {
  cnt: number;
  descrip: string;
  total: number;
}

export interface PeriodicElement {
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

const ELEMENT_DATA: PeriodicElement[] = [
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
  const elemntDescripcion: elementDescripcion[] = [
    {cnt: 1, descrip: 'Atrasos', total: 10},
    {cnt: 2, descrip: 'Abandono', total: 10},
    {cnt: 3, descrip: 'Faltas', total: 10},
    {cnt: 4, descrip: 'Licencias', total: 10},
    {cnt: 5, descrip: '..', total: 10},
    
  // Otros datos aquí
];