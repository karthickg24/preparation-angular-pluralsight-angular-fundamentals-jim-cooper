// tslint:disable: no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   console.log(params);
    //   // this.eventService.getEvent(parseInt(params.get('id'), 10))
    //   //   .subscribe((event: IEvent) => {
    //       this.event = this.route.snapshot.data['event'];
    //       this.addMode = false;
    //    // });
    // });

    this.route.data.subscribe((data: any) => {
      console.log(data);

      if (data['event']) {
        this.event = data['event'];
        this.addMode = false;
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  showAddSession() {
    // this.router.navigate(['/events/sessions/new']);
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }

}
