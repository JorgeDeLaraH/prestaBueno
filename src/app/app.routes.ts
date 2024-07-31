import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AdminAgregarPrestamoComponent } from './pages/admin-agregar-prestamo/admin-agregar-prestamo.component';
import { AdminConsultarPrestamosComponent } from './pages/admin-consultar-prestamos/admin-consultar-prestamos.component';
import { AdminDetalleHistorialComponent } from './pages/admin-detalle-historial/admin-detalle-historial.component';
import { AdminEliminarPrestamoComponent } from './pages/admin-eliminar-prestamo/admin-eliminar-prestamo.component';
import { AdminHistorialesComponent } from './pages/admin-historiales/admin-historiales.component';
import { AdminModificarPrestamoComponent } from './pages/admin-modificar-prestamo/admin-modificar-prestamo.component';

import { LoginComponent } from './pages/login/login.component';
import { ConsultarPrestamosComponent } from './pages/consultar-prestamos/consultar-prestamos.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { PagosPendientesComponent } from './pages/pagos-pendientes/pagos-pendientes.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { PagarPrestamoComponent } from './pages/pagar-prestamo/pagar-prestamo.component';
import { SolicitarPrestamoComponent } from './pages/solicitar-prestamo/solicitar-prestamo.component';
import { register } from 'node:module';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'cuenta', component:CuentaComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'main', component: MainComponent},
    {path: 'pagarprestamo', component: PagarPrestamoComponent},
    {path: 'solicitar', component: SolicitarPrestamoComponent},
    {path: 'consultar', component: ConsultarPrestamosComponent},
    {path: 'historial', component: HistorialComponent},
    {path: 'pagos-pendientes', component: PagosPendientesComponent},
    {path: 'pagar', component: PagarPrestamoComponent},
    {path: 'solicitar', component: SolicitarPrestamoComponent},
    {path: 'admin-agregar', component: AdminAgregarPrestamoComponent},
    {path: 'admin-consultar', component: AdminConsultarPrestamosComponent},
    {path: 'admin-historiales', component: AdminHistorialesComponent},
    {path: 'admin-modificar', component: AdminModificarPrestamoComponent},
    {path: '**', redirectTo: 'register'}
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }