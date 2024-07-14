import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/biblioteca.interfaces';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public libros: Libro[] = [];

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.bibliotecaService.getLibros()
    .subscribe(libros=>this.libros=libros);
  }


}
