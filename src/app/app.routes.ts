import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConsultarPrestamosComponent } from './pages/consultar-prestamos/consultar-prestamos.component';
import { EliminarPrestamoComponent } from './pages/eliminar-prestamo/eliminar-prestamo.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ModificarPrestamoComponent } from './pages/modificar-prestamo/modificar-prestamo.component';
import { PagosPendientesComponent } from './pages/pagos-pendientes/pagos-pendientes.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { PagarPrestamoComponent } from './pages/pagar-prestamo/pagar-prestamo.component';
import { SolicitarPrestamoComponent } from './pages/solicitar-prestamo/solicitar-prestamo.component';
import { register } from 'node:module';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'main', component: MainComponent},
    {path: 'pagarprestamo', component: PagarPrestamoComponent},
    {path: 'solicitar', component: SolicitarPrestamoComponent},
    {path: 'consultar', component: ConsultarPrestamosComponent},
    {path: 'eliminar', component: EliminarPrestamoComponent},
    {path: 'historial', component: HistorialComponent},
    {path: 'modificar', component: ModificarPrestamoComponent},
    {path: 'pagos-pendientes', component: PagosPendientesComponent},
    {path: 'register',component:RegisterComponent},
    {path: '**', redirectTo: 'login'}
];
