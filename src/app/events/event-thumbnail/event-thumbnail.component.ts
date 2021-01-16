import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
      <h2>{{ event.name }}</h2>
  <div class="well hoverwell thumbnail">
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event.location.city }}</span>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
  </div>
  `,
  styles: []
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
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

}
