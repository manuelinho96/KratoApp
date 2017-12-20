import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorCommerceComponent } from './sector-commerce.component';

describe('SectorCommerceComponent', () => {
  let component: SectorCommerceComponent;
  let fixture: ComponentFixture<SectorCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
