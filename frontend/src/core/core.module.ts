import {NgModule, Optional, SkipSelf} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { LoaderService } from "./services/loader.service";
import { ApiService } from "./services/api/api.service";
import { BloomFilterService } from "./services/bloom-filter.service";

/**
 * This module contains the service and other things which should only load once in the application.
 */
@NgModule({
    imports: [
        HttpClientModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        ApiService,
        BloomFilterService,
        LoaderService,
    ],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() otherCoreModule: CoreModule) {
        if (otherCoreModule) {
            throw new Error("The Core Module was imported twice. It can only be imported once (in the root module)");
        }
    }

}
