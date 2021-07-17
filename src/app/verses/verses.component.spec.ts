import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesComponent } from './verses.component';

describe('VersesComponent', () => {
  let component: VersesComponent;
  let fixture: ComponentFixture<VersesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
