import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiademoComponent } from './diademo.component';

describe('DiademoComponent', () => {
  let component: DiademoComponent;
  let fixture: ComponentFixture<DiademoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiademoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiademoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
