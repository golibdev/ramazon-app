import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySpecComponent } from './today-spec.component';

describe('TodaySpecComponent', () => {
  let component: TodaySpecComponent;
  let fixture: ComponentFixture<TodaySpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
