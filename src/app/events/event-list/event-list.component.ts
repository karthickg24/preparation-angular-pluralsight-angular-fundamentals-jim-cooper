import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  template: `
    <section>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <h2>{{event.name}}</h2>
      <div class="well hoverwell thumbnail">
         <div> Date: {{event.date}} </div>
         <div> Time: {{event.time }}  </div>
         <div>Price: \${{event.price }}</div>
          <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}</span>
          </div>
      </div>
    </section>

  `
})
export class EventListComponent implements OnInit {
  event =  {
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
}
