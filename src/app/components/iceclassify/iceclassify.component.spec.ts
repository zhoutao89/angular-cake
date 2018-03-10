import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceclassifyComponent } from './iceclassify.component';

describe('IceclassifyComponent', () => {
  let component: IceclassifyComponent;
  let fixture: ComponentFixture<IceclassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceclassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceclassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
