import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCryptoComponent } from './current-crypto.component';

describe('CurrentCryptoComponent', () => {
  let component: CurrentCryptoComponent;
  let fixture: ComponentFixture<CurrentCryptoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentCryptoComponent]
    });
    fixture = TestBed.createComponent(CurrentCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
