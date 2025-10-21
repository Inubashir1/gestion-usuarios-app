import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './panel-admin.component.html',
  // styleUrls: ['./panel-admin.component.css'] // (Opcional)
})
export class PanelAdminComponent { // <-- ESTE ES EL EXPORT

  // Datos de ejemplo para la tabla
  tickets = [
    { id: 1, sujeto: 'Reporte de impresora', nombre: 'Juan Pérez', estado: 'Abierto', prioridad: 'Media', ultimoMensaje: 'Mi impresora no funciona' },
    { id: 2, sujeto: 'Falla de conexión', nombre: 'Ana García', estado: 'En Progreso', prioridad: 'Alta', ultimoMensaje: 'No tengo acceso a la red interna' },
  ];

  // Datos de ejemplo para el modal (simula la carga de un ticket)
  ticketSeleccionado = {
    id: 1,
    fecha: '18/10/2025',
    estado: 'Abierto',
    prioridad: 'Media',
    email: 'juan.perez@dominio.com',
    mensaje: 'Mi impresora no funciona, se atascó el papel y ahora no enciende.'
  };
}