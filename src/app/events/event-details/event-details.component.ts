// tslint:disable: no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  id: any;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(parseInt(this.id, 10));
  }

  showAddSession() {
    // this.router.navigate(['/events/sessions/new']);
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }

}
