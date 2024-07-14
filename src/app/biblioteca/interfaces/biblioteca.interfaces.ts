export class Idioma{
  texto! : string;
  valor! : Language;
}



export interface SearchResponse {
  status: string;
  body:   Libro[];
}

export interface Libro {
  title:               null |string;
  publisher:           null | string;
  maturityRating:      MaturityRating;
  language:            Language;
  description:         null | string;
  id?:                  null | string;
  pageCount:           number | null;
  price:               number ;
  categories:          string[] | null;
  authors:             string[] | null;
  imageLinks:          ImageLinks;
  industryIdentifiers: IndustryIdentifier[];
  publishedDate:       string;
}



export interface ImageLinks {
  smallThumbnail: null | string | undefined;
  thumbnail:      null | string | undefined;
}

export interface IndustryIdentifier {
  type:       Type;
  identifier: string;
}

export enum Type {
  Isbn10 = "ISBN_10",
  Isbn13 = "ISBN_13",
  Other = "OTHER",
}

export enum Language {
  En = "en",
  Es = "es",
}

export enum MaturityRating {
  NotMature = "NOT_MATURE",
}
