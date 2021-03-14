import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: string, session: ISession, userName: string) {
    session.voters = session.voters.filter(voter => voter !== userName);
    console.log(session);
    const options  = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: string, session: ISession, userName: string) {
    session.voters.push(userName);
    console.log(session);
    const options  = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string) {
    console.log(session);
    return session.voters.some(voter => voter === userName);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error();
      return of(result as T);
    };
  }
}
