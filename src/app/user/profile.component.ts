import { Component, OnInit } from '@angular/core';

@Component({
  template: `
      <h1> Edit Your Profile </h1>
      <hr />
      <div class="col-md-6">
        <h3>[Edit Form will go Here]</h3>
        <br/>
        <br/>
        <button type='submit' class='btn btn-primary'>Save</button>
        <button type='button' class='btn btn-default'>Cancel</button>
      </div>
  `,
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
