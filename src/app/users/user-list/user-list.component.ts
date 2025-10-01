import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Para *ngFor, *ngIf, [ngClass]
import { FormsModule } from '@angular/forms'; // <-- Para [(ngModel)] de la búsqueda
import { Router } from '@angular/router'; // <-- AGREGAR: Para navegar a otras rutas

// Define una interfaz simple para los datos de la tabla
interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  username: string;
  isActive: boolean;
  area: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true, // Zoneless (ni idea pa que es, yo nomas le di que No y me puso zoneless)
  imports: [CommonModule, FormsModule], // Importa los módulos
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // Lista de usuarios
  users: User[] = [
    { id: 1, firstName: 'Guillermo Pepito', lastName: 'Torres', phone: '970 586 296', username: 'GPT', isActive: true, area: 'Sistemas' },
    { id: 2, firstName: 'Maria Alejandra', lastName: 'Perez', phone: '912 345 678', username: 'MAP', isActive: false, area: 'Ventas' },
    { id: 3, firstName: 'Juan Carlos', lastName: 'Soto', phone: '987 654 321', username: 'JCS', isActive: true, area: 'Administración' }
  ];
  
  filteredUsers: User[] = []; 
  searchTerm: string = '';

  // Router para la navegación
  constructor(private router: Router) { } 

  ngOnInit(): void {
    this.filteredUsers = [...this.users];
  }

  // Lógica de filtrado
  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user => {
      return user.firstName.toLowerCase().includes(term) ||
             user.lastName.toLowerCase().includes(term) ||
             user.username.toLowerCase().includes(term) ||
             user.phone.includes(term);
    });
  }

  loadUsers(): void {
    this.searchTerm = '';
    this.applyFilter();
  }

  // Navegación (USR-F1)
  navigateToRegistration(): void {
    // Ejemplo de navegación a la ruta de registro
    this.router.navigate(['/users/register']); 
  }

  // Edición (USR-F5)
  editUser(user: User): void {
    // Ejemplo de navegación a la ruta de edición
    this.router.navigate(['/users/edit', user.id]);
  }

  // Activación / Desactivación (USR-F6)
  toggleUserStatus(user: User): void {
    const action = user.isActive ? 'desactivar' : 'activar';
    if (confirm(`¿Estás seguro que deseas ${action} a ${user.firstName} ${user.lastName}?`)) {
      user.isActive = !user.isActive;
      // Aqui iria algo pero ya me olvide que era
    }
  }
}