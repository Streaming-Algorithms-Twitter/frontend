import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BloomFilterRoutingModule } from './bloom-filter-routing.module';
import { BloomFilterComponent } from './bloom-filter.component';

@NgModule({
    declarations: [BloomFilterComponent],
    exports: [],
    imports: [
        SharedModule,
        BloomFilterRoutingModule
    ],
    providers: [],
})
export class BloomFilterModule { }
