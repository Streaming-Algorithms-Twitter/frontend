export interface BloomFilter<T> {
    add(newEntry: T): void;
    check(checkEntry: T): boolean;
    numberEncountered(): number;
    uniqueEncountered(): number;
    falsePosProb(): number;
    getFilter(): ReadonlyArray<T>;
}