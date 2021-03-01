import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService
  } from './events/index';

export const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateNavigationfromCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: {events: EventListResolverService}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
];
