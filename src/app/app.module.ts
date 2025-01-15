import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

import { AppComponent } from './app.component';
import { BooksListComponent } from '../app/Views/books-list/books-list.component';
import { BookItemComponent } from '../app/Components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Asegúrate de que FormsModule esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
