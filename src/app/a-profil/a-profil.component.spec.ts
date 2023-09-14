import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProfilComponent } from './a-profil.component';

describe('AProfilComponent', () => {
  let component: AProfilComponent;
  let fixture: ComponentFixture<AProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProfilComponent]
    });
    fixture = TestBed.createComponent(AProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
