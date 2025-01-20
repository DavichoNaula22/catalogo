// cart.component.ts
import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Ibook } from '../../Models/book.mode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems: Ibook[] = [];
  total: number = 0;

  constructor() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(item: Ibook): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }

  private calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => {
      const price = parseFloat(item.author.replace('$', ''));
      return sum + price;
    }, 0);
  }
}