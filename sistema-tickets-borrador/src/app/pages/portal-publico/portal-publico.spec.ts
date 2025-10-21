import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPublico } from './portal-publico.component';

describe('PortalPublico', () => {
  let component: PortalPublico;
  let fixture: ComponentFixture<PortalPublico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalPublico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalPublico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
