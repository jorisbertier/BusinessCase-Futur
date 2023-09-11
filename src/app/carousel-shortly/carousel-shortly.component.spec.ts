import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselShortlyComponent } from './carousel-shortly.component';

describe('CarouselShortlyComponent', () => {
  let component: CarouselShortlyComponent;
  let fixture: ComponentFixture<CarouselShortlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselShortlyComponent]
    });
    fixture = TestBed.createComponent(CarouselShortlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
