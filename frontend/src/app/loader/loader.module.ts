import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import { LoaderComponent } from './loader.component';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ],
    imports: [
        SharedModule
    ],
    providers: []
})
export class LoaderModule {
}
