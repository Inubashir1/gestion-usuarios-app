// src/app/app.routes.ts
import { Routes } from '@angular/router';
// Estas importaciones fallaban si los archivos .ts no existían o no tenían el 'export class'
import { PortalPublicoComponent } from './pages/portal-publico/portal-publico.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';

export const routes: Routes = [
    { path: '', redirectTo: 'portal', pathMatch: 'full' },
    { path: 'portal', component: PortalPublicoComponent },
    { path: 'admin', component: PanelAdminComponent }
];