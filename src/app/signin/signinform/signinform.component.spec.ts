import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninformComponent } from './signinform.component';

describe('SigninformComponent', () => {
  let component: SigninformComponent;
  let fixture: ComponentFixture<SigninformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninformComponent]
    });
    fixture = TestBed.createComponent(SigninformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
