// tslint:disable: no-inferrable-types
import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
  .nav.navbar-nav {
    font-size: 15px;
  }

#serchForm {
  margin-right: 100px;
}

@media (max-width: 1200px) {
  #serchForm {
    display: none;
  }
}

li > a.active {
  color: #F97924;
}
  `]
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions) => {
        this.foundSessions = sessions;
        console.log(sessions);
      });

  }
}
