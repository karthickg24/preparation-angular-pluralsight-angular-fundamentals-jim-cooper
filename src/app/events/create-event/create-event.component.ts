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
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);

  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
