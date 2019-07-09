import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor (
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.showRegister = false;
      } else {
        this.isLoggedIn = false;
        this.showRegister = this.settingsService.getSettings().allowRegistration;
      }
    })

  }

  onLogoutClick() {
    this.authService.logout();
    this._flashMessagesService.show('You have logged out', { cssClass: 'alert-success' });
    this.router.navigate(['/login'])
  }
}
