import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoaderService {

    private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public startLoading() {
        this.loading.next(true);
    }

    public stopLoading() {
        this.loading.next(false);
    }

    public isLoading(): BehaviorSubject<boolean> {
        return this.loading;
    }

}