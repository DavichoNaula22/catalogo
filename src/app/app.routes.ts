// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Views/books-list/books-list.component').then(
        (m) => m.BooksListComponent
      ),
  },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./Views/book-detail/book-detail.component').then(
        (m) => m.BookDetailComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./Views/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'not-found/:id',
    loadComponent: () =>
      import('./Views/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];