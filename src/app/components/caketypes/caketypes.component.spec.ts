import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaketypesComponent } from './caketypes.component';

describe('CaketypesComponent', () => {
  let component: CaketypesComponent;
  let fixture: ComponentFixture<CaketypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaketypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaketypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
