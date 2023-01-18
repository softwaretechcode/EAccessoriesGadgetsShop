import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemproComponent } from './dempro.component';

describe('DemproComponent', () => {
  let component: DemproComponent;
  let fixture: ComponentFixture<DemproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
