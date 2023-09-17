import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFavorisComponent } from './a-favoris.component';

describe('AFavorisComponent', () => {
  let component: AFavorisComponent;
  let fixture: ComponentFixture<AFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFavorisComponent]
    });
    fixture = TestBed.createComponent(AFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
