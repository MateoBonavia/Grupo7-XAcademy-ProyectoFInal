import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';

import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public encuestaService: EncuestaService) {}

  encuestasList: any = [];
  pageSlice: any = [];
  ultimoElemento: any = [];

  onPageChange = (event: PageEvent) => {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.encuestasList.length) {
      endIndex = this.encuestasList.length;
    }
    this.pageSlice = this.encuestasList.slice(startIndex, endIndex);
  };

  ngOnInit(): void {
    const result = this.encuestaService
      .getEncuesta()
      .subscribe((encuestas: any) => {
        this.encuestasList = encuestas;
        this.pageSlice = this.encuestasList.slice(0, 3);
        this.ultimoElemento = this.encuestasList[this.encuestasList.length - 1];
        console.log(this.pageSlice);
      });
  }
}
