import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Ibook } from '../../Models/book.mode';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  
  
  bookSelected!: Ibook;

  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private BookService = inject(BookService);

  constructor() {
    this.Aroute.params.subscribe(params => {
      const id = params['id'];
      const book = this.BookService.getBookById(Number(id));

      if (!book) {
        console.log('Book not found');
        this.route.navigate(['not-found', id]);
      } else {
        this.bookSelected = book;
      }
    });
  }

  gotoHome(): void {
    this.route.navigate(['']);
  }

  getBooks(): Ibook[] {
    return [
      { id: 1, title: 'Proteina WHEY', price: 200, imageUrl: './assets/image/ISO-SOG-1.png' },
      { id: 2, title: 'Trembolona', price: 250, imageUrl: './assets/image/images.jpg' },
      { id: 3, title: 'Creatina', price: 300, imageUrl: 'assets/images/libro3.jpg' }
    ];
  }
  
  getBookById(id: number): Ibook | undefined {
    return this.getBooks().find(book => book.id === id);
  }
  
}