import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGalleryComponent } from './a-gallery.component';

describe('AGalleryComponent', () => {
  let component: AGalleryComponent;
  let fixture: ComponentFixture<AGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AGalleryComponent]
    });
    fixture = TestBed.createComponent(AGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
