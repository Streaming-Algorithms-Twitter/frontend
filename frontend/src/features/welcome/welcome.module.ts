import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';

@NgModule({
    declarations: [
        WelcomeComponent,
    ],
    exports: [],
    imports: [
        SharedModule,
        WelcomeRoutingModule,
    ],
    providers: [],
})
export class WelcomeModule {
}
