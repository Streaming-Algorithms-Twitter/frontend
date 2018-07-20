import {Component} from '@angular/core';
import {LoaderService} from '../../core/services/loader.service';

@Component({
    selector: 'app-loader',
    styleUrls: ['loader.component.css'],
    templateUrl: 'loader.component.html'
})
export class LoaderComponent {

    loading: boolean;

    constructor(loaderService: LoaderService) {
        loaderService.isLoading().subscribe(loading => this.loading = loading);
    }

}