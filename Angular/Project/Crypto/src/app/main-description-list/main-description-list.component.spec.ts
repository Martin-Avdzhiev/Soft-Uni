import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescriptionListComponent } from './main-description-list.component';

describe('MainDescriptionListComponent', () => {
  let component: MainDescriptionListComponent;
  let fixture: ComponentFixture<MainDescriptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDescriptionListComponent]
    });
    fixture = TestBed.createComponent(MainDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
