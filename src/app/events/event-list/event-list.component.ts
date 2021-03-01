import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '../../common/shared/toastr.service';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClicked($event) {
    console.log('from child component');
    console.log($event);
  }

  handleThumbnailClick($event) {
    this.toastrService.success($event);
  }
}
