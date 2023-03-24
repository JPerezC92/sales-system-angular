import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/models/AuthCredential';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sales-system';
  isShowing = false;

  authCredentials: AuthCredentials | null = null;

  constructor(public _ApiauthService: ApiauthService, private router: Router) {
    this._ApiauthService.useRes.subscribe((r) => {
      if (r) {
        this.authCredentials = r;
      }
    });
  }

  public toggle() {
    this.isShowing = !this.isShowing;
  }

  logout() {
    this._ApiauthService.logout();
    this.router.navigate(['login']);
  }
}
