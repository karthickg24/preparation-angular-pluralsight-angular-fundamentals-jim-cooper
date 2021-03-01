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

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
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
    EventListResolverService,
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