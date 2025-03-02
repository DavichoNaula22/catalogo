import { Injectable } from '@angular/core';
import { Ibook } from '../Models/book.mode'; // Asegúrate de que el nombre y la ubicación sean correctos

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class BookService {
  // Lista inicial de libros
  listaLibros: Ibook[] = [
    { id: 1, title: 'Proteina WHEY', price: 57, imageUrl: "./assets/image/ISO-SOG-1.png" },
    { id: 2, title: 'Trembolona', price: 50, imageUrl: "./assets/image/images.jpg" },
    { id: 3, title: 'Creatina', price: 35, imageUrl: './assets/image/Sin título.jpg' } // Evité espacios en el nombre del archivo
  ];

  constructor() {}

  /**
   * Obtiene todos los libros.
   * @returns Lista de libros (Ibook[]).
   */
  getBooks(): Ibook[] {
    return this.listaLibros;
  }

  /**
   * Busca un libro por su ID.
   * @param id Identificador del libro.
   * @returns Un libro (Ibook) o undefined si no existe.
   */
  getBookById(id: number): Ibook | undefined {
    return this.listaLibros.find(libro => libro.id === id);
  }

  /**
   * Agrega un nuevo libro a la lista.
   * @param book Objeto que representa el nuevo libro.
   */
  addBook(book: Ibook): void {
    // Asignar un ID único basado en la longitud actual de la lista
    book.id = this.listaLibros.length + 1;
    // Agregar el nuevo libro a la lista
    this.listaLibros.push(book);
  }
}
