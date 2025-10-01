import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserList } from './user-list'; // Ni idea de cual sea el error pero cuando lo borro se pone en blanco

describe('UserList', () => {
  let component: UserList;
  let fixture: ComponentFixture<UserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
