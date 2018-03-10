import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicingclassifyComponent } from './slicingclassify.component';

describe('SlicingclassifyComponent', () => {
  let component: SlicingclassifyComponent;
  let fixture: ComponentFixture<SlicingclassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicingclassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicingclassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
