import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EVENTS } from './event';
import { IEvent, ISession } from './event.model';

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

  searchSessions(searchTerm: string) {
    const term = searchTerm.toLowerCase();
    let sessions: ISession[] = [];
    let matchingSessions: any;
    this.EVENTS.forEach((event) => {
      matchingSessions = event.sessions.filter((session) => {
        return session.name.toLowerCase().indexOf(term) > -1;
      });
      matchingSessions = matchingSessions.map((session: ISession) => {
        session.eventId = event.id;
        return session;
      });
      sessions = sessions.concat(matchingSessions);
    });

    const emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(sessions);
    }, 100);
    return emitter;
  }
}
