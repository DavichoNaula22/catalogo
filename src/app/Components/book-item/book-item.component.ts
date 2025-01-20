import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ibook } from '../../Models/book.mode';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  route = inject(Router);
  cartService = inject(CartService);
  @Input() item!: Ibook;

  navigateToID(): void {
    this.route.navigate(['books', this.item.id]);
  }
  navigateToId(): void {
    this.route.navigate(['cart', this.item.id]);
  }

  
  addToCart(event: Event): void {
    event.stopPropagation(); // Evita que el clic navegue a los detalles
    this.cartService.addToCart(this.item);
    alert(`${this.item.title} se ha añadido al carrito`);
  }
}
