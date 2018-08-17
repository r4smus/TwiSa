import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    attributes: Array<Object> = [{id: 1, msg: 'Map', image: 'assets/images/Maps-icon.png'}, {id: 2, msg: 'Tweet-Text', image: 'assets/images/tweet-text.png'}, {id: 3, msg: 'Tweet-Source', image: 'assets/images/datasource.png'}];
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        // console.log($event);
        console.log($event.dragData.msg);
    }
}
