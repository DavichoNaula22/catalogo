import { Component, inject } from '@angular/core';
import { Ibook } from '../../Models/book.mode'; // Modelo de libro
import { BookItemComponent } from '../../Components/book-item/book-item.component'; 
import { BookService } from '../../Services/book.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  standalone: true,
  imports: [BookItemComponent, FormsModule, NgFor] // Asegúrate de importar el componente BookItem
})
export class BooksListComponent {
  // Inyecta el servicio BookService
  bookService = inject(BookService);

  // Inicializa la lista de libros
  listaLibros: Ibook[] = this.bookService.getBooks();

  constructor(){
    console.log(this.listaLibros)
  }

  // Modelo para el nuevo libro
  newBook: Ibook = { 
    id: 0,         // Un valor temporal, será asignado correctamente en el servicio
    title: '', 
    author: '', 
    imageUrl: ''   // Valor predeterminado vacío
  };
  

  // Método para agregar un nuevo libro
  addBook() {
    if (this.newBook.title && this.newBook.author) {
      this.bookService.addBook(this.newBook); // Agrega el libro al servicio
      this.listaLibros = this.bookService.getBooks(); // Actualiza la lista de libros
      this.newBook = { id: 0,title: '', author: '', imageUrl:''  }; // Limpia los campos del formulario
    }
  }

  
}
