import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioDetailComponent } from './comercio-detail.component';

describe('ComercioDetailComponent', () => {
  let component: ComercioDetailComponent;
  let fixture: ComponentFixture<ComercioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
