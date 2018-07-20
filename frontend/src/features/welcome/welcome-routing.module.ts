import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
    {
        component: WelcomeComponent,
        path: ''
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class WelcomeRoutingModule {
}