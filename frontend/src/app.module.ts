import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app/app-bootstrap.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,

        AppBootstrapModule
    ],
    providers: []
})
export class AppModule {
}