import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpimgComponent } from './upimg.component';

describe('UpimgComponent', () => {
  let component: UpimgComponent;
  let fixture: ComponentFixture<UpimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
