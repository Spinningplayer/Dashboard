import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedstripsComponent } from './ledstrips.component';

describe('LedstripsComponent', () => {
  let component: LedstripsComponent;
  let fixture: ComponentFixture<LedstripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedstripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedstripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
