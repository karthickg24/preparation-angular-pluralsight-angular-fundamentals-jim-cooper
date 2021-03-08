import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../shared/event.model';
import { VoterService } from '../shared/voter/voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  filteredSessions: ISession[] = [];
  constructor(private voter: VoterService,
    public auth: AuthService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.filteredSessions.sort(sortByNameAsc) : this.filteredSessions.sort(sortByVotesDesc)
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      // this.filteredSessions = this.sessions.map(session => ({...session}));
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filter;
      }).map(session => ({...session}));
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voter.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voter.addVoter(session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voter.userHasVoted(session, this.auth.currentUser.userName);
  }
}

export function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

export function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
