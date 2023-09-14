import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDownComponent } from './carousel-down.component';

describe('CarouselDownComponent', () => {
  let component: CarouselDownComponent;
  let fixture: ComponentFixture<CarouselDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDownComponent]
    });
    fixture = TestBed.createComponent(CarouselDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
