import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EVENTS } from './event';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
  EVENTS: IEvent[] = EVENTS;
  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {subject.next(this.EVENTS); subject.complete();}, 100);
    return subject;
  }

  getEvent(id: any): IEvent {
    return this.EVENTS.find(event => event.id === parseInt(id, 10));
  }

  saveEvent(event: IEvent) {
    event.id = this.EVENTS.length + 1;
    event.sessions = [];
    this.EVENTS.push(event);
  }

  updateEvent(event: IEvent) {
   const index = EVENTS.findIndex(e => e.id === event.id);
   this.EVENTS[index] = event;
  }
}
