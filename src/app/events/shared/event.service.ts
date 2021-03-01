import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  getEvents() {
    let subject = new Subject();
    setTimeout(() => {subject.next(EVENTS); subject.complete();}, 100);
    return subject;
  }

  getEvent(id: any) {
    return EVENTS.find(event => event.id === parseInt(id));
  }
}

const EVENTS = [{
  id: 1,
  name: 'Angular Connect',
  date: '9/26/2020',
  time: '9:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
  id: 2,
  name: 'Angular Connect',
  date: '10/26/2020',
  time: '9:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
  id: 3,
  name: 'Angular Connect',
  date: '11/26/2020',
  time: '9:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
  id: 4,
  name: 'Angular Connect',
  date: '12/26/2020',
  time: '8:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
  id: 1,
  name: 'Angular Connect',
  date: '13/26/2020',
  time: '10:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
  id: 1,
  name: 'Angular Connect',
  date: '14/26/2020',
  time: '10:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1075 DT',
    city: 'London',
    country: 'England'
  },
  onlineURL: 'http://ng-nl.org'
},
{
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
},
{
  id: 1,
  name: 'Angular Connect',
  date: '9/26/2020',
  time: '8:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  onlineURL: 'http://ng-nl.org'
}];
