import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styles: [
    `
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb;}
    `
  ]
})
export class EventListComponent implements OnInit {
  event1 =  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1075 DT',
      city: 'London',
      country: 'England'
    }
  }
  constructor() { }

  ngOnInit() { }

  handleClicked($event) {
    console.log($event);
  }
}
