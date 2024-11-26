import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SalonComponent } from './salon/salon.component'; // Vista protegida
import { AuthGuard } from './guards/auth.guard'; // Importa el guard
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'salones', component: SalonComponent, canActivate: [AuthGuard] },
  { path: 'reserva', component: ReservaComponent },
  { path: '**', redirectTo: '' } // Redirige a Home en caso de ruta inválida
];