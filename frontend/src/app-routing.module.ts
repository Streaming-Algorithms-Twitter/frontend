import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: './features/welcome/welcome.module#WelcomeModule'
    },
    {
        path: 'bloom-filter',
        loadChildren: './features/bloom-filter/bloom-filter.module#BloomFilterModule'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

/**
 * The root routing module. Other routes can be found next to their respective features.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
    declarations: [],
})
export class AppRoutingModule {
}