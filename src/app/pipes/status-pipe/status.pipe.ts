import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from "../../interfaces/user.interface";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    if (status == undefined || status == null) {
      return 'Status invalido';
    }

    return status ? "Ativo" : "Inativo"
  }

}
