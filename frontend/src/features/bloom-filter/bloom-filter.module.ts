import { NgModule } from '@angular/core';

import { BloomFilterComponent } from './bloom-filter.component';
import { BloomFilterRoutingModule } from './bloom-filter-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        BloomFilterRoutingModule
    ],
    exports: [],
    declarations: [BloomFilterComponent],
    providers: [],
})
export class BloomFilterModule { }
