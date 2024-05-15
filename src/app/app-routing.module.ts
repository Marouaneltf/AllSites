import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './layout/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [

                    // New Update Template
                    { path: '', loadChildren: () => import('./layout/components/list/listdemo.module').then(m => m.ListDemoModule) },
                    { path: 'cooling-rooms-ryadh', loadChildren: () => import('./layout/components/ryadh/cooling-rooms/cooling-rooms.module').then(m => m.CoolingRoomsModule) },

                ],
            },
           { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
