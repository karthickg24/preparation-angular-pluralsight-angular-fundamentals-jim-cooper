import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EVENTS } from './event';
import { IEvent, ISession } from './event.model';

@Injectable()
export class EventService {
  EVENTS: IEvent[] = EVENTS;

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]> {
    // const subject = new Subject<IEvent[]>();
    // setTimeout(() => {subject.next(this.EVENTS); subject.complete();}, 100);
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: any): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvents')));
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    // event.id = this.EVENTS.length + 1;
    // event.sessions = [];
    // this.EVENTS.push(event);
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<IEvent>('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }
  
  /* Put - intelligent handle post as well. no need of update event method. 
  save event mehtod will take care
   */
  // updateEvent(event: IEvent) {
  //  const index = EVENTS.findIndex(e => e.id === event.id);
  //  this.EVENTS[index] = event;
  // }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    // const term = searchTerm.toLowerCase();
    // let sessions: ISession[] = [];
    // let matchingSessions: any;
    // this.EVENTS.forEach((event) => {
    //   matchingSessions = event.sessions.filter((session) => {
    //     return session.name.toLowerCase().indexOf(term) > -1;
    //   });
    //   matchingSessions = matchingSessions.map((session: ISession) => {
    //     session.eventId = event.id;
    //     return session;
    //   });
    //   sessions = sessions.concat(matchingSessions);
    // });

    // const emitter = new EventEmitter(true);
    // setTimeout(() => {
    //   emitter.emit(sessions);
    // }, 100);
    // return emitter;
    return this.http.get<ISession[]>(`/api/session/search?search=${searchTerm}`)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error();
      return of(result as T);
    };
  }

}
