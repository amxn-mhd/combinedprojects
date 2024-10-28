import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidlAComponent } from './chidl-a.component';

describe('ChidlAComponent', () => {
  let component: ChidlAComponent;
  let fixture: ComponentFixture<ChidlAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChidlAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChidlAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
