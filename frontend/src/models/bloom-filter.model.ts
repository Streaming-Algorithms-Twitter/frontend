import BitArray = require('node-bitarray');
import { IBloomFilter } from './interfaces/interfaces';

export class BitarrayBloomFilter implements IBloomFilter<string>{
    // how many words we have encountered (doesn't have to be unique)
    private encountered: number;
    // how many for sure are unique
    private uniqueWords: number;

    private readonly numBits: number;

    // our storage. gotten from https://www.npmjs.com/package/node-bitarray
    private bitarray: BitArray;

    public constructor(private hashFunctions: number, private numBytes: number) {
        this.numBits = numBytes * 8;
        this.bitarray = new BitArray().fill(numBytes * 8);

        this.encountered = 0;
        this.uniqueWords = 0;
    }

    public add(newEntry: string): void {
        this.encountered++;
        let unique: boolean = false;
        for (let i = 0; i < this.hashFunctions; i++) {
            // we can add any transformation of i but it doesn't really matter, i did i^2
            // this weird expression is to account for the fact that the default modulus operator can return negative values
            let saltHashValue: number = ((this.getHashCode(newEntry, i * i) % this.numBits) + this.numBits) % this.numBits;
            if (this.bitarray.get(saltHashValue) == 0) unique = true; // this bit has never been set.
            this.bitarray.set(saltHashValue, 1);
        }
        if (unique) this.uniqueWords++;
    }

    public check(checkEntry: string): boolean {
        for (let i = 0; i < this.hashFunctions; i++) {
            // we can add any transformation of i but it doesn't really matter, i did i^2
            let saltHashValue: number = ((this.getHashCode(checkEntry, i * i) % this.numBits) + this.numBits) % this.numBits;
            if (this.bitarray.get(saltHashValue) == 0) return false; // this bit has never been set, so there's no way this string has been seen.
        }
        return true; // may be a false positive
    }

    public numberEncountered(): number {
        return this.encountered;
    }

    // this will require us 
    public falsePosProb(trulyUnique?: number): number {
        // if we aren't provided with this, we'll have to manually use our estimate (which is guranteed to be lower than  or 
        // equal to actual value)
        let unqiueNum = trulyUnique ? trulyUnique : this.uniqueWords;
        return ((1 - 1 / (this.numBits)) ** (this.hashFunctions * unqiueNum)) ** (this.hashFunctions);
    }

    public getFilter(): ReadonlyArray<string> {
        return this.bitarray.toArray();
    }

    public uniqueEncountered(): number {
        return this.uniqueWords;
    }

    public getBytesUsed(): number {
        return this.numBytes;
    }

    // this performs exactly as Java hashcode, just added the salt option
    // see https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    private getHashCode(text: string, salt?: string | number): number {
        if (salt != undefined) {
            text = `${salt}${text}`;
        }
        let h = 0, l = text.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + text.charCodeAt(i++) | 0;
        return h;
    };


}