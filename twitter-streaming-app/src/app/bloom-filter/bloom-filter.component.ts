import { Component, OnInit } from '@angular/core';
import { BloomFilterService } from '../observables/bloomFilterService';

@Component({
  selector: 'app-bloom-filter',
  templateUrl: './bloom-filter.component.html',
  styleUrls: ['./bloom-filter.component.css']
})
export class BloomFilterComponent implements OnInit {

  public filterActive: boolean;

  public byteSize: number;
  public hashFunctions: number;
  public addText: string;


  public bloomFilterArray: ReadonlyArray<any>;
  public flasePositiveRate: number;
  public wordsAdded: Set<string>;

  constructor(public service: BloomFilterService) {
    this.filterActive = false;
  }
  ngOnInit() {
  }

  public newFilter() {
    console.log('clicked');
      this.service.getBloomInit(this.byteSize, this.hashFunctions).subscribe(data => {
        this.bloomFilterArray = data.state;
      });
    this.filterActive = true;
    this.wordsAdded = new Set<string>();
  }

  public addTextToFilter() {
    this.service.postBloomAddUpdate(this.addText).subscribe(data => {
      console.log(data);
      this.bloomFilterArray = data.state;
      this.flasePositiveRate = data.fprate;
    });
    this.wordsAdded.add(this.addText);
  }


}
