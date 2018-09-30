import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLinkComponent } from './three-link.component';

describe('ThreeLinkComponent', () => {
  let component: ThreeLinkComponent;
  let fixture: ComponentFixture<ThreeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
