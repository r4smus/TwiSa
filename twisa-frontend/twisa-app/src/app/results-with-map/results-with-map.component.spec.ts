import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsWithMapComponent } from './results-with-map.component';

describe('ResultsWithMapComponent', () => {
  let component: ResultsWithMapComponent;
  let fixture: ComponentFixture<ResultsWithMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsWithMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
