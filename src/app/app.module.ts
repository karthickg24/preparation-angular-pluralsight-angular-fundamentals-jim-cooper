import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { NavComponent } from './nav/nav.component';
// import { ToastrService } from './common/shared/services/toastr-old.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { AuthService } from './user/auth.service';
import { ProfileRouteActivatorService } from './user/profile/profile-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/shared/components/collapsible-well/collapsible-well.component';
import { DurationPipe } from './common/shared/pipes/duration.pipe';
import { Toastr, TOASTR_TOKEN } from './common/shared/services/toastr.service';
import { SimpleModalComponent } from './common/shared/components/simple-modal/simple-modal.component';
import { JQ_TOKEN } from './common/shared/services/jQuery.service';
import { ModalTriggerDirective } from './common/shared/directives/modal-trigger.directive';
import { UpvoteComponent } from './events/upvote/upvote.component';
import { ValidateLocationOnlineurlDirective } from './events/create-event/validate-location-onlineurl.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolverService } from './events/event-details/event-resolver.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    ValidateLocationOnlineurlDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    //
    // {
    //   provide: TOASTR_TOKEN,
    //   useExisting: toastr
    // },
    // here token is the class itself. whenever somebody uses this token to lookup something in
    // dependency injection registry, we could actually use an object created by this class here.
    // So, use the eventRouteActivatorService class to create an object and return that whenever somebody
    // asks for an object using the EventRouteActivator class as the token.
    // {
    //   provide: EventRouteActivatorService,
    //   useClass: EventRouteActivatorService
    // },
    {
      provide: 'canDeactivateNavigationfromCreateEvent',
      useValue: checkDirtyState
    },
    ProfileRouteActivatorService,
    EventListResolverService,
    EventResolverService,
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
