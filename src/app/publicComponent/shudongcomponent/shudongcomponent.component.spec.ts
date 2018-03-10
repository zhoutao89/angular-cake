import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShudongcomponentComponent } from './shudongcomponent.component';

describe('ShudongcomponentComponent', () => {
  let component: ShudongcomponentComponent;
  let fixture: ComponentFixture<ShudongcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShudongcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShudongcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
