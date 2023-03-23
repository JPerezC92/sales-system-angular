import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sales-system';
  isShowing = false;

  public toggle() {
    this.isShowing = !this.isShowing;
  }
}
