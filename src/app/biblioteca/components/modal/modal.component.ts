import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Libro } from '../../interfaces/biblioteca.interfaces';
import { ServicioCarritoCompraService } from '../../services/servicio-carrito-compra.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Libro, private servicioCarritoCompra: ServicioCarritoCompraService) {
    this.libro = data
  }


  public libro!: Libro;


  ngOnInit(): void {
    if (!this.libro) throw Error('Hero property is required')
  }


  agregarCarrito() {
    this.servicioCarritoCompra.agregarLibro(this.libro)

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se ha agregado exitosamente al carrito de compras.",
      showConfirmButton: false,
      timer: 1800
    });

  }
}
