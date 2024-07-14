import { Pipe, PipeTransform } from '@angular/core';
import { ImageLinks, Libro } from '../interfaces/biblioteca.interfaces';

@Pipe({
  name: 'imgFaltante'
})
export class ImgFaltantePipe implements PipeTransform {

  transform(libro: Libro): string {
    if (libro.imageLinks.thumbnail != undefined) {
      let img: String =libro.imageLinks.thumbnail
      return img+ '.jpg'
    }
    return 'assets/img/image.jpg';
  }

}
