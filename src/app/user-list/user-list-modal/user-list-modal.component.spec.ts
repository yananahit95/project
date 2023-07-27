import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListModalComponent } from './user-list-modal.component';

describe('UserListModalComponent', () => {
  let component: UserListModalComponent;
  let fixture: ComponentFixture<UserListModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListModalComponent]
    });
    fixture = TestBed.createComponent(UserListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
