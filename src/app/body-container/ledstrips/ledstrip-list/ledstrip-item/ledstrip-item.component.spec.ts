import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedstripItemComponent } from './ledstrip-item.component';

describe('LedstripItemComponent', () => {
  let component: LedstripItemComponent;
  let fixture: ComponentFixture<LedstripItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedstripItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedstripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
