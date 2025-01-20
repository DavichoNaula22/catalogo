import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CartComponent } from './Views/cart/cart.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Configuración de rutas
    CommonModule,
    RouterModule,
    CartComponent // Importa CommonModule para las directivas comunes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
