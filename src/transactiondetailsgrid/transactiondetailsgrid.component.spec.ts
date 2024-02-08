import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiondetailsgridComponent } from './transactiondetailsgrid.component';

describe('TransactiondetailsgridComponent', () => {
  let component: TransactiondetailsgridComponent;
  let fixture: ComponentFixture<TransactiondetailsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactiondetailsgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactiondetailsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
