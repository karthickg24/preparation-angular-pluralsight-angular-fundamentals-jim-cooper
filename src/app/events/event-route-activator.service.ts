import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists: boolean = !!this.eventService.getEvent(route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    console.log(eventExists);
    return eventExists;

  }
}
