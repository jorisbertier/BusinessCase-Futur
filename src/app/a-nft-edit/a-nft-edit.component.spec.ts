import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANftEditComponent } from './a-nft-edit.component';

describe('ANftEditComponent', () => {
  let component: ANftEditComponent;
  let fixture: ComponentFixture<ANftEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ANftEditComponent]
    });
    fixture = TestBed.createComponent(ANftEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
