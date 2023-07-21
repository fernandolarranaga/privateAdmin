import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazonDetailComponent } from './blazon-detail.component';

describe('BlazonDetailComponent', () => {
  let component: BlazonDetailComponent;
  let fixture: ComponentFixture<BlazonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
