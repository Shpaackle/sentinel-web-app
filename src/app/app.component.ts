import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sentinel-web-app';
  loadedFeature = 'creation';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
