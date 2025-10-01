// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component'; 

export const routes: Routes = [
  // Ruta raíz al listado
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  
  // listado de usuarios (USR-F4)
  { path: 'users', component: UserListComponent },
  
  // Para el formulario de registro (USR-F1)
  // Componente de listas de usuario/registro
  { path: 'users/register', component: UserListComponent }, 
  
  // Para el formulario de edición (Cuando lo tenga) (USR-F5)
  { path: 'users/edit/:id', component: UserListComponent },
];