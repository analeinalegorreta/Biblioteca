import { Component, OnInit } from '@angular/core';
import { ServicioCarritoCompraService } from '../../services/servicio-carrito-compra.service';
import { RegistroCarrito } from '../../interfaces/registroCarrito';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tabla-page',
  templateUrl: './tabla-page.component.html',
  styleUrls: ['./tabla-page.component.css']
})
export class TablaPageComponent implements OnInit {

  constructor(private servicioCarritoCompraService: ServicioCarritoCompraService) {

  }

  public detalle: RegistroCarrito[] = [];
  public totaldelaOrden: number = 0

  ngOnInit(): void {
    this.detalle = this.servicioCarritoCompraService.detalle
    this.totaldelaOrden = this.servicioCarritoCompraService.calcularTotal()
    console.log(this.totaldelaOrden)
  }


  aumentarCantidad(id: string | null | undefined): void {
    this.servicioCarritoCompraService.aumentarCantidadLibro(id)
    this.detalle = this.servicioCarritoCompraService.detalle
    this.totaldelaOrden = this.servicioCarritoCompraService.totaldelaOrden


  }

  disminCantidadLibro(id: string | null | undefined): void {


    this.servicioCarritoCompraService.disminCantidadLibro(id)
    this.detalle = this.servicioCarritoCompraService.detalle
    this.totaldelaOrden = this.servicioCarritoCompraService.totaldelaOrden

  }


  bloqueo(value: number) {
    if (value < 2) {
      return true
    } return false
  }

  borrarLibro(id: string | null | undefined): void {
    this.servicioCarritoCompraService.borrarLibro(id)
  }

  enviarCompra() {
    this.servicioCarritoCompraService.envioDeCompra().subscribe(resp =>

     {
      if (resp.respuesta === 'Compra_exitosa') {

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Exitosamente.",
      showConfirmButton: false,
      timer: 1800
    });
      }

    });
  }

}
