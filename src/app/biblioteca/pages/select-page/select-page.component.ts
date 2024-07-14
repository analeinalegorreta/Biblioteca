import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Categories } from '../../interfaces/categoria.interfaces';
import { Libro } from '../../interfaces/biblioteca.interfaces';
import { IsbnCategori } from '../../interfaces/sbnCategori.interfaces';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {

  public categorias: String[] = [];
  public isbns: String[] = [];
  public isbnSeleccionado:string=''
  public categoriaSeleccionado:string=''
  public libros:IsbnCategori[]=[];

  public myForm: FormGroup = this.fb.group({
    categoria: ['', Validators.required],
    isbn: ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
    private bibliotecaService: BibliotecaService) { }


  ngOnInit(): void {

    this.bibliotecaService.getIsbn()
      .subscribe(isbn => this.isbns = isbn)


    this.myForm.get('isbn')!.valueChanges  //obtiene el valor de region del formulario identificando cuando cambia
      .subscribe(isbn => {
        this.isbnSeleccionado=isbn
        this.bibliotecaService.getCategories(isbn)
          .subscribe(categoria => this.categorias = categoria);
      })

      this.myForm.get('categoria')!.valueChanges  //obtiene el valor de region del formulario identificando cuando cambia
      .subscribe(categoria => {
        this.bibliotecaService.getIsbnCategori(this.isbnSeleccionado,categoria)
          .subscribe(libros => this.libros = libros);
      })



  }





}



