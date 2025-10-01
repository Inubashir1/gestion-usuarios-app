// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Segun un tuto de 5 minutos de un barbon español, esto muestra rutas xd
  imports: [RouterOutlet], 
  templateUrl: './app.html', // Apunta al archivo app.html
  styleUrls: ['./app.scss'] 
})
export class App {
  // Ni idea que poner aca :sob:
}