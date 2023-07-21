import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazonIdAdminComponent } from './blazon-id-admin.component';

describe('BlazonIdAdminComponent', () => {
  let component: BlazonIdAdminComponent;
  let fixture: ComponentFixture<BlazonIdAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazonIdAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazonIdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
