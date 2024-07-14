import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Libro } from '../../interfaces/biblioteca.interfaces';
import { BibliotecaService } from '../../services/biblioteca.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  public searchInput=new FormControl('');
  public libros:Libro[]=[];
  public selectedLibro?:Libro;

  constructor(private bibliotecaService:BibliotecaService, public dialog: MatDialog){}


  searchLibro(){
    const value:string=this.searchInput.value || '';
    this.bibliotecaService.getSuggestions(value)
    .subscribe(libros=>this.libros=libros)
  }


  onSelectedOption(event:MatAutocompleteSelectedEvent){


    if(!event.option.value) {
      this.selectedLibro=undefined;
      return;
    }

    const libro:Libro=event.option.value;
    this.searchInput.setValue(libro.title);

    this.selectedLibro=libro;
    this.openDialog()

    }

    openDialog() {
        const dialogRef = this.dialog.open(ModalComponent,{
          data:this.selectedLibro
        })

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });

    }

}
