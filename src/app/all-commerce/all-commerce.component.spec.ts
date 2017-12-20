import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommerceComponent } from './all-commerce.component';

describe('AllCommerceComponent', () => {
  let component: AllCommerceComponent;
  let fixture: ComponentFixture<AllCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
