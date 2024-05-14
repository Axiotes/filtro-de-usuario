import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UsersList } from '../../data/uses-list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  userList: IUser[] = UsersList;
  displayedColumns: string[] = ['nome', 'dataCadastro', 'status'];

  selectUser(user: []) {
    console.log("Usuário:", user);
  }
}
