import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninheaderComponent } from './signinheader.component';

describe('SigninheaderComponent', () => {
  let component: SigninheaderComponent;
  let fixture: ComponentFixture<SigninheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninheaderComponent]
    });
    fixture = TestBed.createComponent(SigninheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
