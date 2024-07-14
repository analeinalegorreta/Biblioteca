import { Injectable } from '@angular/core';
import { RegistroCarrito } from '../interfaces/registroCarrito';
import { Libro } from '../interfaces/biblioteca.interfaces';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoCompraService {

  public detalle: RegistroCarrito[] = [];
  public totaldelaOrden: number = 0
  private dataSubject = new Subject<any>();
  private baseUrl:string='http://69.231.77.3:8080'

  constructor(private http: HttpClient) { }


  agregarLibro(libro: Libro) {
    let nuevoLibro: RegistroCarrito = new RegistroCarrito
    nuevoLibro.id = libro.id
    nuevoLibro.cantidad = 1
    nuevoLibro.imagen = libro.imageLinks.thumbnail
    nuevoLibro.nombre = libro.title
    nuevoLibro.precio = libro.price

    this.detalle.push(nuevoLibro);
    this.totalDeProductos()
  }


  calcularTotal() {

    this.totaldelaOrden=0
    for (let a = 0; a < this.detalle.length; a++) {
      let detalleActual = this.detalle[a]
      detalleActual.total=detalleActual.cantidad*detalleActual.precio
      this.totaldelaOrden += detalleActual.total


    }
    console.log(this.totaldelaOrden)
    return this.totaldelaOrden
  }


  borrarLibro(id: string | null | undefined): void {
    let indice=0

      for(let a=0;a<this.detalle.length;a++){
        if(this.detalle[a].id==id){
           indice=a
          break;

        }
      }

      this.detalle.splice(indice,1)


  }


  aumentarCantidadLibro(id: string | null | undefined): void {
    const result = this.detalle.filter((obj) => {
      return obj.id === id;
    });

    result[0].cantidad += 1
    this.calcularTotal()
    this.totalDeProductos()
  }

  disminCantidadLibro(id: string | null | undefined): void {
    const result = this.detalle.filter((obj) => {
      return obj.id === id;
    });


    result[0].cantidad -= 1
    this.calcularTotal()
    this.totalDeProductos()
  }



 private totalDeProductos(){

    let totaldeProductos=0
    for (let a = 0; a < this.detalle.length; a++) {
      let detalleActual = this.detalle[a]
      totaldeProductos+=detalleActual.cantidad

    }

    this.dataSubject.next(totaldeProductos);

  }



  getCantidadDProductos() {
    return this.dataSubject.asObservable();
  }


  envioDeCompra():Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.baseUrl}/ejecutarCompra`,this.detalle)
    }









}
