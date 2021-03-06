import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
  <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date | date: 'longDate'}}</div>
    <div [ngStyle]="{'font-weight': 'bold', 'background-color': '#caf9fa'}" [ngClass]="getStartTimeClass(event)" [ngSwitch]="event?.time">

      Time: {{ event?.time }}
      <span [style.color]="'green'" *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span class="brown" *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span class="grey" *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{ event?.price | currency: 'USD'}}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{ event?.location?.address }}</span>
      <span class="pad-left">{{ event?.location?.city }}</span>
    </div>
    <div class="" *ngIf="event?.onlineUrl">Online: {{event?.onlineUrl}}</div>
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
  </div>
  `,
    styles: [
      `
      .bold { font-weight: bold;}
      .green { color: green;}
      .brown { color:brown;}
      .grey { color:grey;}
      .thumbnail { min-height: 250px;}
      .pad-left { margin-left: 10px;}
      .well div { color: #bbb;}
      `
    ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  someProperty: any = "some Value";
  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    this.eventClick.emit('foo');
  }

  templeReferenceMethod()  {
    console.log('log foo');
  }

  getStartTimeClass(event: any) {
    if (this.event && (event.time === "8:00 am"))
    return "green";
    if (this.event && (event.time === "10:00 am"))
    return "red";
    return "";
  }
}
