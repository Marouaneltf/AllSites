import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoolingRoomsComponent } from './cooling-rooms.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CoolingRoomsComponent }
    ])],
    exports: [RouterModule]
})
export class CoolingRoomsRoutingModule { }
