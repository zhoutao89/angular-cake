import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmcakeComponent } from './warmcake.component';

describe('WarmcakeComponent', () => {
  let component: WarmcakeComponent;
  let fixture: ComponentFixture<WarmcakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmcakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
