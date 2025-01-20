// cart.service.ts
import { Injectable } from '@angular/core';
import { Ibook } from '../Models/book.mode';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Ibook[] = [];

  addToCart(item: Ibook): void {
    this.cart.push(item);
    console.log(`${item.title} ha sido añadido al carrito.`);
  }

  removeFromCart(item: Ibook): void {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
      this.cart.splice(index, 1);
      console.log(`${item.title} ha sido eliminado del carrito.`);
    }
  }

  getCartItems(): Ibook[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    console.log('Carrito limpiado.');
  }
}