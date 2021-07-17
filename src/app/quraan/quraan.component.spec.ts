import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuraanComponent } from './quraan.component';

describe('QuraanComponent', () => {
  let component: QuraanComponent;
  let fixture: ComponentFixture<QuraanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuraanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
