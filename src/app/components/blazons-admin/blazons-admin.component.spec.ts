import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazonsAdminComponent } from './blazons-admin.component';

describe('BlazonsAdminComponent', () => {
  let component: BlazonsAdminComponent;
  let fixture: ComponentFixture<BlazonsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazonsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazonsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
