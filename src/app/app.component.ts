import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './Views/cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Asegúrate de que esté en plural "styleUrls"
})
export class AppComponent {
  title = 'myapp';

  constructor(private router: Router) {} // Inyectar el Router

  onCartClick() {
    console.log('Navegando al carrito');
    this.router.navigate(['/cart']); // Navegar a la ruta '/cart'
  }

  onHomeClick() {
    console.log('Navegando a la mierda');
    this.router.navigate(['']); // Navegar a la ruta '/cart'
  }
}
