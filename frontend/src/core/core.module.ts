import {HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import { ApiService } from './services/api/api.service';
import { BloomFilterService } from './services/bloom-filter.service';
import { LoaderService } from './services/loader.service';

/**
 * This module contains the service and other things which should only load once in the application.
 */
@NgModule({
    declarations: [],
    exports: [],
    imports: [
        HttpClientModule,
    ],
    providers: [
        ApiService,
        BloomFilterService,
        LoaderService,
    ],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() otherCoreModule: CoreModule) {
        if (otherCoreModule) {
            throw new Error('The Core Module was imported twice. It can only be imported once (in the root module)');
        }
    }

}
