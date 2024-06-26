import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConsultarPrestamosComponent } from './pages/consultar-prestamos/consultar-prestamos.component';
import { EliminarPrestamoComponent } from './pages/eliminar-prestamo/eliminar-prestamo.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ModificarPrestamoComponent } from './pages/modificar-prestamo/modificar-prestamo.component';
import { PagosPendientesComponent } from './pages/pagos-pendientes/pagos-pendientes.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'consultar', component: ConsultarPrestamosComponent},
    {path: 'eliminar', component: EliminarPrestamoComponent},
    {path: 'historial', component: HistorialComponent},
    {path: 'modificar', component: ModificarPrestamoComponent},
    {path: 'pagos-pendientes', component: PagosPendientesComponent},
    {path: '**', redirectTo: 'login'}
];
