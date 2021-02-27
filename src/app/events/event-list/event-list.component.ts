import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/shared/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleClicked($event) {
    console.log('from child component');
    console.log($event);
  }

  handleThumbnailClick($event) {
    this.toastrService.success($event);
  }
}
