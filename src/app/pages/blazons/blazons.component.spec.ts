import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazonsComponent } from './blazons.component';

describe('BlazonsComponent', () => {
  let component: BlazonsComponent;
  let fixture: ComponentFixture<BlazonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
