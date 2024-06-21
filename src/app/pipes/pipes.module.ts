import { NgModule } from '@angular/core';
import { PhonePipe } from './phone-pipe/phone.pipe';
import { AddressPipe } from './address-pipe/address.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe
  ],
  exports: [
    PhonePipe,
    AddressPipe
  ]
})

export class PipesModule { }
