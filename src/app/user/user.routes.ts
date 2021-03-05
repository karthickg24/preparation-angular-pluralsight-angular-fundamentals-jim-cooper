import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileRouteActivatorService } from './profile/profile-route-activator.service';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivatorService] },
    { path: 'login', component: LoginComponent },
];