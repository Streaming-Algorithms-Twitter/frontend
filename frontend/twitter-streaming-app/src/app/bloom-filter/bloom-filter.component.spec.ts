import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomFilterComponent } from './bloom-filter.component';

describe('BloomFilterComponent', () => {
  let component: BloomFilterComponent;
  let fixture: ComponentFixture<BloomFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloomFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloomFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
