import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count: number = 0;
  hideImage = true;

  btnPressed() {
    console.log("Button pressed");
    this.count++;
  }

  imgClicked() {
    console.log("Image Clicked");
    if (this.hideImage == true) {
      this.hideImage = false;
    } else {
      this.hideImage = true;
    }
  }
}
