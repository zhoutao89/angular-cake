import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeclassifyComponent } from './cakeclassify.component';

describe('CakeclassifyComponent', () => {
  let component: CakeclassifyComponent;
  let fixture: ComponentFixture<CakeclassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeclassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeclassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
