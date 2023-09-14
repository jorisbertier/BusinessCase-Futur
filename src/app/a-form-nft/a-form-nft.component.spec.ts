import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormNftComponent } from './a-form-nft.component';

describe('AFormNftComponent', () => {
  let component: AFormNftComponent;
  let fixture: ComponentFixture<AFormNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFormNftComponent]
    });
    fixture = TestBed.createComponent(AFormNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
