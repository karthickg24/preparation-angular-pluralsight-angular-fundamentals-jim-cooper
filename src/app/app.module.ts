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
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/shared/toastr.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { AuthService } from './user/auth.service';
import { ProfileRouteActivatorService } from './user/profile/profile-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/shared/components/collapsible-well/collapsible-well.component';
import { DurationPipe } from './common/shared/pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
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