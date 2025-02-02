import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../../common/shared/services/toastr.service';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
        float: right;
        color: #E05C65;
        padding-left: 10px;
      }
    .err Input {
      background-color: #E3C3C5;
    }

    .err ::-webkit-input-placeholder { color: #999;}
    .err ::-moz-placeholder { color: #999;}
    .err :-moz-placeholder { color: #999;}
    .err :ms-input-placeholder { color: #999;}

  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required]);
    this.lastName = new FormControl(this.authService.currentUser.lastName,
      [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }

  saveProfileForm(frmValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(frmValues)
        .subscribe(() => {
          this.toastr.success('Profile Saved');
        });
    }
  }
  cancel() {
    this.router.navigate(['/events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['/user/login']);
      }); 

  }
}
