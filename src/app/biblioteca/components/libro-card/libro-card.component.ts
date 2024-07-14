import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/biblioteca.interfaces';

@Component({
  selector: 'libro-card',
  templateUrl: './libro-card.component.html',
  styleUrls: ['./libro-card.component.css']
})
export class LibroCardComponent implements OnInit {


  @Input()
  public libros!:Libro


  ngOnInit(): void {
   if (!this.libros)throw Error('Libro required')
  }

}
