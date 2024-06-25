import {Component, Output, EventEmitter, Input} from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UsersList } from '../../data/uses-list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input({ required: true }) userList: IUser[] = [];

  displayedColumns: string[] = ['nome', 'dataCadastro', 'status'];

  @Output() indexOfSelected = new EventEmitter<number>();

  selectUser(user: number) {
    this.indexOfSelected.emit(user);
  }
}
