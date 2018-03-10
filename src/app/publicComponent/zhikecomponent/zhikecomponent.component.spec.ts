import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhikecomponentComponent } from './zhikecomponent.component';

describe('ZhikecomponentComponent', () => {
  let component: ZhikecomponentComponent;
  let fixture: ComponentFixture<ZhikecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhikecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhikecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
