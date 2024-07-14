import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Idioma, ImageLinks, Language, Libro, MaturityRating } from '../../interfaces/biblioteca.interfaces';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  constructor(private bibliotecaService: BibliotecaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }


  selectedFile: File | null | undefined= null;


  public libroForm = new FormGroup({

    titulo: new FormControl(''),
    publisher: new FormControl(''),
    lenguaje: new FormControl<Language >(Language.En),
    descripcion: new FormControl(''),
    nPaginas: new FormControl(''),
    categoria: new FormControl(''),
    autor: new FormControl(''),
    fPublicacion: new FormControl(''),
    alt_img: new FormControl(''),
  })

  public quieras:Idioma[]=[
    {
      texto: 'Ingles',
      valor: Language.En,
    },
    {
      texto: 'español',
      valor: Language.Es,
    },
  ]






  onsubmit(): void {

    if (this.libroForm.invalid) return;


    let imageLinks: ImageLinks = {
      smallThumbnail: this.selectedFile?.name,
      thumbnail: this.selectedFile?.name,
    }




    let cat = this.libroForm.get('categoria')!.value || '';
    let aut = this.libroForm.get('autor')!.value || '';


    let libro: Libro = {
      title: this.libroForm.get('titulo')!.value,
      publisher: this.libroForm.get('publisher')!.value,
      maturityRating: MaturityRating.NotMature,
      language:this.libroForm.get('lenguaje')!.value || Language.En,
      description: this.libroForm.get('descripcion')!.value,
      id: '',
      pageCount: 1,
      categories: [cat],
      authors: [aut],
      imageLinks: imageLinks,
      industryIdentifiers: [],
      price:1,
      publishedDate: this.libroForm.get('fPublicacion')!.value || '',
    }


    this.bibliotecaService.addLibro(libro)
      .subscribe(resp => console.log(resp));

    console.log(libro)
  }





  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile)

    /// codigo para convertirlo a base64
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0] );
    reader.onload = () => {
        console.log(reader.result);
    };
  }


  ngOnInit(): void {



  }

}
