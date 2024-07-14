import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Libro } from '../../interfaces/biblioteca.interfaces';

@Component({
  selector: 'app-biblioteca-pagina',
  templateUrl: './biblioteca-pagina.component.html',
  styleUrls: ['./biblioteca-pagina.component.css']
})
export class BibliotecaPaginaComponent implements OnInit {


  public libro?:Libro;

  constructor(
    private librosService: BibliotecaService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.librosService.getLibroById(id)),
    )
    .subscribe(libro=>{
      if(!libro)return this.router.navigate(['/biblioteca/list']);
      this.libro=libro;
      console.log(libro)
      return;
    })

  }

  goBack():void{
    this.router.navigateByUrl('biblioteca/list')
  }

}
