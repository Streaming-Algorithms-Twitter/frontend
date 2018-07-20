import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloomFilterComponent } from './bloom-filter.component';

const routes: Routes = [
  { path: '', component: BloomFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloomFilterRoutingModule { }