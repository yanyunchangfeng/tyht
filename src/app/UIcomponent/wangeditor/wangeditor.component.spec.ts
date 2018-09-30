import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WangeditorComponent } from './wangeditor.component';

describe('WangeditorComponent', () => {
  let component: WangeditorComponent;
  let fixture: ComponentFixture<WangeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WangeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WangeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
