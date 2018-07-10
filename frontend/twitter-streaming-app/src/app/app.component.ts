import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bloomFilter: boolean;
  public home: boolean;
  public about: boolean;

  constructor() {
    this.home = true;
    this.bloomFilter = false;
    this.about = false;
  }

  private onHomeToggle() {
    console.log(2);
    this.home = !this.home;
    if (this.home) {
      this.bloomFilter = false;
      this.about = false;
    }
  }

  private onBloomFilterToggle() {
    console.log(3);
    this.bloomFilter = !this.bloomFilter;
    if (this.bloomFilter) {
      this.home = false;
      this.about = false;
    }
  }

  private onAboutToggle() {
    console.log(4);
    this.about = !this.about;
    if (this.bloomFilter) {
      this.home = false;
      this.bloomFilter = false;
    }
  }
}
