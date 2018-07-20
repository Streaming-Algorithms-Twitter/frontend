import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoaderModule } from './loader/loader.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        HeaderModule,
        FooterModule,
        LoaderModule
    ],
    declarations: [AppComponent],
    exports: [],
    providers: [],
})
export class AppBootstrapModule {
}
