import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabientComponent } from './cabient.component';

describe('CabientComponent', () => {
  let component: CabientComponent;
  let fixture: ComponentFixture<CabientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
