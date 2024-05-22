import { Component } from '@angular/core';
import {IUser} from "./interfaces/user.interface";
import {UsersList} from "./data/uses-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = UsersList[0];

  public receiveIndexUser(index: number){
    this.userSelected = UsersList[index];
  }
}
