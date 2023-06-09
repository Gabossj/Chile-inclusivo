import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolucrateComponent } from './involucrate.component';

describe('InvolucrateComponent', () => {
  let component: InvolucrateComponent;
  let fixture: ComponentFixture<InvolucrateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvolucrateComponent]
    });
    fixture = TestBed.createComponent(InvolucrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
