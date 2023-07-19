import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCryptoNewComponent } from './current-crypto-new.component';

describe('CurrentCryptoNewComponent', () => {
  let component: CurrentCryptoNewComponent;
  let fixture: ComponentFixture<CurrentCryptoNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentCryptoNewComponent]
    });
    fixture = TestBed.createComponent(CurrentCryptoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
