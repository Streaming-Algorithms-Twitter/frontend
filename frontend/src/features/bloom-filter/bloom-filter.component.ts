import { Component, OnInit } from '@angular/core';
import { BloomFilterService } from '../../core/services/bloom-filter.service';
import { BitarrayBloomFilter } from '../../models/bloom-filter.model';
import { IBloomFilter } from '../../models/interfaces/interfaces';

@Component({
  selector: 'bloom-filter',
  styleUrls: ['bloom-filter.component.css'],
  templateUrl: 'bloom-filter.component.html'
})
export class BloomFilterComponent implements OnInit {

  public filterActive: boolean;
  public numBytes: number = 0;
  public hashFunctions: number = 0;
  public addText: string;

  public bloomFilter: IBloomFilter<string>;
  public falsePositiveRate: number;
  public wordsAdded: Set<string>;

  constructor() {
    this.filterActive = false;
  }

  ngOnInit() {
    return;
  }

  public newFilter() {
    this.bloomFilter = new BitarrayBloomFilter(this.hashFunctions, this.numBytes);
    this.filterActive = true;
    this.wordsAdded = new Set<string>();
  }

  public addTextToFilter() {
    this.bloomFilter.add(this.addText);
    this.wordsAdded.add(this.addText);
    this.addText = '';
    this.falsePositiveRate = this.bloomFilter.falsePosProb(this.wordsAdded.size);
  }

}
