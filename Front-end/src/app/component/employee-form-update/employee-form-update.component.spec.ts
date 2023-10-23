import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormUpdateComponent } from './employee-form-update.component';

describe('EmployeeFormUpdateComponent', () => {
  let component: EmployeeFormUpdateComponent;
  let fixture: ComponentFixture<EmployeeFormUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormUpdateComponent]
    });
    fixture = TestBed.createComponent(EmployeeFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
