import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [
    `
      .errorMessage {
        margin-top: 150px;
        font-size: 170px;
        text-align: center;
      }
    `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
