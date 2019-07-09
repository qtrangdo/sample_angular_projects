import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor (
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/'])
      }
    })
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this._flashMessagesService.show('You are logged in', { cssClass: 'alert-success' });
        this.router.navigate(['/'])
      })
      .catch(err => {
        this._flashMessagesService.show(err.message, { cssClass: 'alert-danger' });
        this.router.navigate(['/login']);
      })
  }
}
