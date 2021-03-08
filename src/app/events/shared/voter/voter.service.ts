import { Injectable } from '@angular/core';
import { ISession } from '../event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter(voter => voter !== userName);
  }

  addVoter(session: ISession, userName: string) {
    session.voters.push(userName);
  }

  userHasVoted(session: ISession, userName: string) {
    console.log(session);
    return session.voters.some(voter => voter === userName);
  }
}
