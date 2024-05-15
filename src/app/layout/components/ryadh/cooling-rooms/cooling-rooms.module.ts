import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoolingRoomsComponent } from './cooling-rooms.component';
import { CoolingRoomsRoutingModule } from './cooling-rooms-routing.module';

@NgModule({
  declarations: [CoolingRoomsComponent],
  imports: [
    CoolingRoomsRoutingModule,
    CommonModule,
    FormsModule
]
})
export class CoolingRoomsModule { }
