import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/shared/toastr.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { AuthService } from './user/auth.service';
import { ProfileRouteActivatorService } from './user/profile/profile-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateNavigationfromCreateEvent',
      useValue: checkDirtyState
    },
    ProfileRouteActivatorService,
    EventListResolverService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Do you want to leave the page without changes saved?');
  }
  return true;
}