import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppBootstrapModule } from "./app/app-bootstrap.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,

        AppBootstrapModule
    ],
    declarations: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}