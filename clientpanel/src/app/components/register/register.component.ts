import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor (
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(res => {
        this._flashMessagesService.show('You are now registered and logged in', { cssClass: 'alert-success' });
        this.router.navigate(['/'])
      })
      .catch(err => {
        this._flashMessagesService.show(err.message, { cssClass: 'alert-danger' });
      })
  }
}
