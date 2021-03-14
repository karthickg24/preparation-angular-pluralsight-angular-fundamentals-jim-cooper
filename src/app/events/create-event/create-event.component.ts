import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: IEvent;
  isDirty = true;
  constructor(private router: Router,
    private eventService: EventService) { }

  ngOnInit() {

  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues)
      .subscribe((event: IEvent) => {
        this.isDirty = false;
        this.router.navigate(['/events']);
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
