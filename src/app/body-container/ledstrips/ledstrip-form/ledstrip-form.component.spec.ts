import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedstripFormComponent } from './ledstrip-form.component';

describe('LedstripFormComponent', () => {
  let component: LedstripFormComponent;
  let fixture: ComponentFixture<LedstripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedstripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedstripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
