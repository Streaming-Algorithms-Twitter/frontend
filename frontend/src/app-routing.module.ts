import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        loadChildren: './features/welcome/welcome.module#WelcomeModule',
        path: ''
    },
    {
        loadChildren: './features/bloom-filter/bloom-filter.module#BloomFilterModule',
        path: 'bloom-filter'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

/**
 * The root routing module. Other routes can be found next to their respective features.
 */
@NgModule({
    declarations: [],
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
    providers: []
})
export class AppRoutingModule {
}