import { Component, OnInit } from '@angular/core';
import { IUser } from "./interfaces/user.interface";
import { UsersList } from "./data/uses-list";
import { FilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  userListFiltred: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.userList = UsersList;
      this.userListFiltred = UsersList;
    });
  }

  public receiveIndexUser(index: number){
    this.userSelected = UsersList[index];
    this.showUserDetails = true;
  }

  public receiveFilter(filterOptions: FilterOptions){
    console.log(filterOptions);

    this.userListFiltred = this.filterUserList(filterOptions, this.userList);
  }

  public filterUserListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return UsersList;
    }

    const filteredList = userList.filter((user: IUser) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
  }

  public filterUserList(filterOptions: FilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUserListByName(filterOptions.name, UsersList);

    return filteredList;
  }
}
