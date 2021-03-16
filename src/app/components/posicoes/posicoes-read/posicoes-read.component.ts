import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Posicao } from '../posicao.model';
import { PosicoesReadDataSource } from './posicoes-read-datasource';

@Component({
  selector: 'app-posicoes-read',
  templateUrl: './posicoes-read.component.html',
  styleUrls: ['./posicoes-read.component.css']
})
export class PosicoesReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Posicao>;
  dataSource: PosicoesReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['placa', 'data_posicao', 'velocidade', 'ignicao', 'latitude', 'logitude'];

  constructor() {
    this.dataSource = new PosicoesReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
