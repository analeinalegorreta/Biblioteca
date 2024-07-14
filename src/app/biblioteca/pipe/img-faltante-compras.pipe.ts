import { Pipe, PipeTransform } from '@angular/core';
import { RegistroCarrito } from '../interfaces/registroCarrito';

@Pipe({
  name: 'imgFaltanteCompras'
})
export class ImgFaltanteComprasPipe implements PipeTransform {

  transform(libro: RegistroCarrito): string {
    if (libro.imagen != undefined) {
      let img: String =libro.imagen
      return img+ '.jpg'
    }
    return 'assets/img/image.jpg';
  }

}
