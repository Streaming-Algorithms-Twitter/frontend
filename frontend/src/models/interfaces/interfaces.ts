export interface IBloomFilter<T> {
    add(newEntry: T): void;
    check(checkEntry: T): boolean;
    numberEncountered(): number;
    uniqueEncountered(): number;
    // this will only be needed for the bitarray bloom filter implementation
    falsePosProb(trulyUnique: number): number;
    getFilter(): ReadonlyArray<any>;
    getBytesUsed(): number;
}