import { NgModule } from '@angular/core';
import { PhonePipe } from './phone-pipe/phone.pipe';

@NgModule({
  declarations: [
    PhonePipe
  ],
  exports: [PhonePipe]
})

export class PipesModule { }
