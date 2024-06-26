import { Component } from '@angular/core';
import {IUser} from "./interfaces/user.interface";
import {UsersList} from "./data/uses-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userList: IUser[] = []
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  public receiveIndexUser(index: number){
    this.userSelected = UsersList[index];
    this.showUserDetails = true;
  }
}
