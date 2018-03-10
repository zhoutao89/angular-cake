import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecarComponent } from './cakecar.component';

describe('CakecarComponent', () => {
  let component: CakecarComponent;
  let fixture: ComponentFixture<CakecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
