import { Component } from '@angular/core';
import { ServicioCarritoCompraService } from '../../services/servicio-carrito-compra.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public totaldelaOrden: number = 0

  constructor(private servicioCarritoCompraService: ServicioCarritoCompraService) {

  }

  public sidebarItems = [
    { label: 'Listado', icon: 'view_list', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-libro' },
    { label: 'Buscar', icon: 'search', url: './search' },
    { label: 'Carrito de Compras', icon: 'local_grocery_store', url: './tabla' },
    { label: 'Categoria', icon: 'subject', url: './select' },
  ]



  ngOnInit(): void {

    this.servicioCarritoCompraService.getCantidadDProductos().subscribe(respuesta => {
      this.totaldelaOrden = respuesta;
      console.log(this.totaldelaOrden);
    }
    )

  }

}
