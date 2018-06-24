import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BloomFilterService {
    constructor(private httpclient: HttpClient) { }

    private pipeHttpRequest(httpRequest: Observable<any>): Observable<any> {
        return httpRequest.pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', JSON.stringify(error));
        return Promise.reject(error);
    }

    public getBloomInit(bytes: number, hashFunctions: number): Observable<any> {
        if (!bytes || typeof (bytes) !== 'number' || !hashFunctions || typeof (hashFunctions) !== 'number') {
            return of([]);
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/init/' + bytes + '/' + hashFunctions;
        return this.pipeHttpRequest(this.httpclient.get<any>(url));
    }

    public getBloomAddUpdate(addTerm: string): any {
        if (!addTerm || typeof (addTerm) !== 'string') {
            return of([]);
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/add/' + addTerm;
        return this.pipeHttpRequest(this.httpclient.get<any>(url));
    }

    public getCheckString(checkTerm: string): Observable<any> {
        if (!checkTerm || typeof (checkTerm) !== 'string') {
            return of([]);
        }
        console.log('Hello');
        let url: string = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        return this.httpclient.get<any>(url)
    }
}
