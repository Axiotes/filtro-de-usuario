import { NgModule } from '@angular/core';
import { PhonePipe } from './phone-pipe/phone.pipe';
import { AddressPipe } from './address-pipe/address.pipe';
import { StatusPipe } from './status-pipe/status.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    StatusPipe
  ]
})

export class PipesModule { }
