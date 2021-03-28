// tslint:disable: no-inferrable-types
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService, IEvent, ISession } from '../events';
import { AuthService } from '../user/auth.service';
import { Input } from '@angular/core';

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
  `],
  encapsulation: ViewEncapsulation.None
})

export class NavComponent implements OnInit {
  @Input() title: string;
  searchTerm: string = '';
  foundSessions: ISession[];
  events: IEvent[];
  constructor(public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions) => {
        this.foundSessions = sessions;
        console.log(sessions);
      });

  }
}
