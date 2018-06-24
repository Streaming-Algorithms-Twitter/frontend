import { Component, OnInit } from '@angular/core';
import { BloomFilterService } from '../observables/bloomFilterService';

@Component({
  selector: 'app-bloom-filter',
  templateUrl: './bloom-filter.component.html',
  styleUrls: ['./bloom-filter.component.css']
})
export class BloomFilterComponent implements OnInit {

  public bloomFilterArray:any;

  constructor(public service: BloomFilterService) { }
  ngOnInit() {
  }

  public newFilter() {
    this.service.getCheckString('Hello').subscribe(data => {
      console.log(data);
      this.bloomFilterArray = data.time.updated;
    });
  }

}
