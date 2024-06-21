import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from "../../interfaces/address.interface";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const invalidAddress =
      !address.rua ||
      !address.estado ||
      !address.cidade ||
      !address.pais ||
      address.numero == null || address.numero == undefined;

    if (invalidAddress) {
      return "Endereco invalido"
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado} - ${address.pais} `;
  }

}
