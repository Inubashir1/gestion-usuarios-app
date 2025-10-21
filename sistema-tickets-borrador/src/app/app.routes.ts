import { Routes } from '@angular/router';
import { PortalPublicoComponent } from './pages/portal-publico/portal-publico.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';

export const routes: Routes = [
    // La ruta raíz redirige al portal público
    { path: '', redirectTo: 'portal', pathMatch: 'full' },
    
    // Vista 1: El portal público para crear/consultar tickets
    { path: 'portal', component: PortalPublicoComponent },
    
    // Vista 2: El panel del administrador
    { path: 'admin', component: PanelAdminComponent }
];