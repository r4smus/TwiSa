import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TwiSA Web-App';
    wizardUrls: string[] = ['/selectAttributes', '/conditions' ];
    currentUrl = 0;

    getNextUrl(): string {
      let index = 0;
      if (this.currentUrl < this.wizardUrls.length) {
        index = this.currentUrl;
        this.currentUrl++;
      }
      return this.wizardUrls[index];
    }

    getPreviousUrl(): string {
      let index = this.wizardUrls.length - 1;
      if (this.currentUrl > 0)  {
        index = this.currentUrl;
        this.currentUrl--;
      }
      return this.wizardUrls[index];
    }


}
