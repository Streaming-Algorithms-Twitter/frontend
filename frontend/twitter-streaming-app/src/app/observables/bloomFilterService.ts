import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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
        if (!bytes || !hashFunctions) {
            // dummy stuff. should be of([]);
            return of({state:'Failed'});
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/init/' + bytes + '/' + hashFunctions;
        return this.pipeHttpRequest(this.httpclient.get<any>(url));
    }

    public postBloomAddUpdate(addTerm: string): any {
        if (!addTerm) {
            // dummy stuff. should be of([]);
            return of({state:'Failed'});
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/add/'+addTerm;
        return this.pipeHttpRequest(this.httpclient.get<any>(url));
        // return this.pipeHttpRequest(this.httpclient.post<any>(url, addTerm));
    }

    public getCheckString(checkTerm: string): Observable<any> {
        if (!checkTerm) {
            return of({state:'Failed'});
        }
        let url: string = 'http://localhost:5000/search-algorithms/bloom-filter/manual/add/'+checkTerm;
        return this.httpclient.get<any>(url);
    }
}
