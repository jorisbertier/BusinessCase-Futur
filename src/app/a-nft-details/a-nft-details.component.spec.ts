import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ANftDetailsComponent } from './a-nft-details.component';

describe('ANftDetailsComponent', () => {
  let component: ANftDetailsComponent;
  let fixture: ComponentFixture<ANftDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ANftDetailsComponent]
    });
    fixture = TestBed.createComponent(ANftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
