import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedstripListComponent } from './ledstrip-list.component';

describe('LedstripListComponent', () => {
  let component: LedstripListComponent;
  let fixture: ComponentFixture<LedstripListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedstripListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedstripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
