import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-personal-perfil',
  templateUrl: './personal-perfil.component.html',
  styleUrls: ['./personal-perfil.component.scss'],
})

export class PersonalPerfilComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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


export interface PeriodicElement {
  name: string;
  position: number;
  weight: String;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 2, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 3, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 4, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 5, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 6, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 7, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 8, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 9, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 10, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 1, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 2, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 3, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 4, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 5, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 6, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 7, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 8, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 9, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 10, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 1, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 2, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 3, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 4, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 5, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 6, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 7, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 8, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 9, name: '23-05-2023', weight: "Martes", symbol: '10:30'},
  {position: 10, name: '23-05-2023', weight: "Martes", symbol: '10:30'}
  // Otros datos aquí
];