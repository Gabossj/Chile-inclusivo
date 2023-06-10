import { Component, OnInit } from '@angular/core';
import { Carusel, CaruselFotos } from '../../interfaces/carusel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit{
  Fotos:Array<Carusel>=CaruselFotos;
  data: any[] | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any[]>('assets/noticias.json').subscribe(response => {
      this.data = response;
    });
  }
}
