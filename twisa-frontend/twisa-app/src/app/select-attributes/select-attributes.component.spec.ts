import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAttributesComponent } from './select-attributes.component';

describe('SelectAttributesComponent', () => {
  let component: SelectAttributesComponent;
  let fixture: ComponentFixture<SelectAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
