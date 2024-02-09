import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesplitupComponent } from './expensesplitup.component';

describe('ExpensesplitupComponent', () => {
  let component: ExpensesplitupComponent;
  let fixture: ComponentFixture<ExpensesplitupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesplitupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensesplitupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
