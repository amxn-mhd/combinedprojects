import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidlBComponent } from './chidl-b.component';

describe('ChidlBComponent', () => {
  let component: ChidlBComponent;
  let fixture: ComponentFixture<ChidlBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChidlBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChidlBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
