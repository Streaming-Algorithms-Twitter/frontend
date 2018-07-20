import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BloomFilterService {
    public hashFunctions: number;
    public byteSize: number;
    public addText: string;

    constructor(private httpclient: HttpClient) {
        this.hashFunctions = 8;
        this.byteSize = 1024;
        this.addText = '';
     }

    public getBloomInit(bytes: number, hashFunctions: number): Observable<any> {
        if (!bytes || typeof (bytes) !== 'number' || !hashFunctions || typeof (hashFunctions) !== 'number') {
            // dummy stuff. should be of([]);
            return of([0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0]);
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/init/' + bytes + '/' + hashFunctions;
        return this.pipeHttpRequest(this.httpclient.get<any>(url));
    }

    public postBloomAddUpdate(addTerm: string): any {
        if (!addTerm || typeof (addTerm) !== 'string') {
            // dummy stuff. should be of([]);
            return of([0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0]);
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/add/';
        return this.pipeHttpRequest(this.httpclient.post<any>(url, addTerm));
    }

    public getCheckString(checkTerm: string): Observable<any> {
        if (!checkTerm || typeof (checkTerm) !== 'string') {
            return of([]);
        }
        console.log('Hello');
        let url: string = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        return this.httpclient.get<any>(url)
    }

    // A sample request to test observable setup.
    public sampleString(checkTerm: string): Observable<any> {
        if (!checkTerm || typeof (checkTerm) !== 'string') {
            return of([]);
        }
        console.log('Hello');
        let url: string = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        return this.httpclient.get<any>(url)
    }


    private pipeHttpRequest(httpRequest: Observable<any>): Observable<any> {
        return httpRequest.pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', JSON.stringify(error));
        return Promise.reject(error);
    }
}
