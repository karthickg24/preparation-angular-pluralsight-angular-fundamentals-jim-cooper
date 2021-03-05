import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
  .nav.navbar-nav {
    font-size: 15px;
  }

#serchForm {
  margin-right: 100px;
}

@media (max-width: 1200px) {
  #serchForm {
    display: none;
  }
}

li > a.active {
  color: #F97924;
}
  `]
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
