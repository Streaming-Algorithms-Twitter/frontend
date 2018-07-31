import BitArray from 'node-bitarray';
import { BloomFilter } from './interfaces/bloom_filter';

export class BitarrayBloomFilter implements BloomFilter<string>{
    // how many words we have encountered (doesn't have to be unique)
    private encountered: number;
    // how many for sure are unique
    private uniqueWords: number;

    private readonly numBits: number;  

    // our storage. gotten from https://www.npmjs.com/package/node-bitarray
    private bitarray: BitArray;

    public constructor(private hashFunctions: number, private numBytes: number) {
        this.numBits = numBytes*8;
        this.bitarray = new BitArray().fill(numBytes*8) ;

        this.encountered = 0;
        this.uniqueWords = 0;
    }

    public add(newEntry: string): void {
        this.encountered++;
        let unique: boolean = false;
        for (let i=0; i < this.hashFunctions; i++) {
            let saltString: string = i+newEntry+i;
            // we can add any transformation of i but it doesn't really matter, i did i^2
            let saltHashValue: number = this.getHashCode(saltString, i*i) % this.numBits;
            if (this.bitarray.get(saltHashValue) == 0) unique = true; // this bit has never been set.
            this.bitarray.set(saltHashValue, 1);
        }
        if (unique) this.uniqueWords++;
    }    

    public check(checkEntry: string): boolean {
        for (let i=0; i < this.hashFunctions; i++) {
            let saltString: string = i+checkEntry+i;
            // we can add any transformation of i but it doesn't really matter, i did i^2
            let saltHashValue: number = this.getHashCode(saltString, i*i) % this.numBits;
            if (this.bitarray.get(saltHashValue) == 0) return false; // this bit has never been set, so there's no way this string has been seen.
        }
        return true; // may be a false positive
    }

    public numberEncountered(): number {
        return  this.encountered;
    }

    // this will require us 
    public falsePosProb(trulyUnique ?: number): number {
        // if we aren't provided with this, we'll have to manually use our estimate (which is guranteed to be lower than  or 
        // equal to actual value)
        let unqiueNum = trulyUnique ? trulyUnique: this.uniqueWords;
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
    private getHashCode(text: string, salt?: string | number): number{
        let hash: number = 0;
        let chr: number;
        
        if (salt != undefined) {
            text = salt+text;
        }

        if (text.length === 0) return hash;
        for (let i = 0; i < text.length; i++) {
          chr = text.charCodeAt(i);
          hash = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
      };


}