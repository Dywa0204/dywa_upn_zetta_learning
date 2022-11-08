import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomCounterComponent } from './bom-counter.component';

describe('BomCounterComponent', () => {
  let component: BomCounterComponent;
  let fixture: ComponentFixture<BomCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
