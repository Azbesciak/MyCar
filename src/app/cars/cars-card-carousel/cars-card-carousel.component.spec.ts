import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCardCarouselComponent } from './cars-card-carousel.component';

describe('CarsCardCarouselComponent', () => {
  let component: CarsCardCarouselComponent;
  let fixture: ComponentFixture<CarsCardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
