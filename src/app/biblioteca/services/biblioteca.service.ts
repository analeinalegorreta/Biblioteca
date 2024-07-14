import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { Libro, SearchResponse } from '../interfaces/biblioteca.interfaces';
import { Categories } from '../interfaces/categoria.interfaces';
import { Isbn } from '../interfaces/ISBN.interfaces';
import { IsbnCategori } from '../interfaces/sbnCategori.interfaces';


@Injectable({ providedIn: 'root' })
export class BibliotecaService {

  private baseUrl:string='http://69.231.77.3:8080'




  constructor(private http: HttpClient,) { }


  getLibros():Observable<Libro[]>{
    return this.http.get<SearchResponse>(`${this.baseUrl}/books`)
    .pipe(
      map( searchResponse=>searchResponse.body

      )
    )
  }


  getLibroById(id:string):Observable<Libro| undefined>{
    return this.http.get<SearchResponse>(`${this.baseUrl}/books/${id}`)
    .pipe(

      map( searchResponse=>searchResponse.body[0]

        )

      );



  }



getSuggestions(query:string):Observable<Libro[]>{
  return this.http.get<SearchResponse>(`${this.baseUrl}/books/filter?q=${query}&_limit=6`)
  .pipe(
    map( searchResponse=>searchResponse.body

    )
    );
}


getCategories(isbn:string):Observable<String[]>{
  return this.http.get<Categories>(`${this.baseUrl}/api/v1/categories?industryIdentifier=${isbn}`)
  .pipe(
    map( Categories=>Categories.body

    )
  )
}


getIsbn():Observable<String[]>{
  return this.http.get<Isbn>(`${this.baseUrl}/api/v1/industryIdentifiers`)
  .pipe(
    map( Isbn=>Isbn.body

    )
  )
}


getIsbnCategori(isbn:string,categori:string):Observable<IsbnCategori[]>{
  return this.http.get<IsbnCategori[]>(`${this.baseUrl}/books/filtered?industryIdentifier=${isbn}&category=${categori}`)

}


addLibro(libro:Libro):Observable<Libro>{
return this.http.post<Libro>(`${this.baseUrl}/books`,libro);
}


}
