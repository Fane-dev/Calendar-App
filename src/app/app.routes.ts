import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './authGuard/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, pathMatch:'full'},
    {path:'register', component: RegisterComponent, canActivate:[authGuard]},
    {path:'login', component: LoginComponent, canActivate:[authGuard]},
    {path:'calendar', component: CalendarComponent}
];
