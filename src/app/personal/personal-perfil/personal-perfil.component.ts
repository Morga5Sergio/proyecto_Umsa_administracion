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
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 4, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 6, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 10, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 4, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 6, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 10, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 4, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 6, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 10, name: 'Helium', weight: 4.0026, symbol: 'He'}
  // Otros datos aquí
];