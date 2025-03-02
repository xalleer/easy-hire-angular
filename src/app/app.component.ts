import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonicModule, HttpClientModule],
  standalone: true,
})
export class AppComponent {
  constructor() {}
}
