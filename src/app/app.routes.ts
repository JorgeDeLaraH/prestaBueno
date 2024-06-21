import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SolicitarPrestamoComponent } from './pages/solicitar-prestamo/solicitar-prestamo.component';
import { PagarPrestamoComponent } from './pages/pagar-prestamo/pagar-prestamo.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'solicitar', component: SolicitarPrestamoComponent},
    {path: 'pagar', component: PagarPrestamoComponent},
    {path: '**', redirectTo: 'login'}
];
