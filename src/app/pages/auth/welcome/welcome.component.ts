import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [IonicModule, RouterModule],
  standalone: true
})
export class WelcomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Welcome page")
  }

}
