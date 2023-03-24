import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledialogComponent } from './saledialog.component';

describe('SaledialogComponent', () => {
  let component: SaledialogComponent;
  let fixture: ComponentFixture<SaledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaledialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
