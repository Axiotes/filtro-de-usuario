import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({required: true}) user: IUser = { } as IUser;
  public statusUser: string = "";

  public checkStatus(){
    if (this.user.ativo){
      return this.statusUser = "Ativo";
    } else {
      return this.statusUser = "Inativo";
    }
  }
}
