import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HududlarComponent } from './hududlar.component';

describe('HududlarComponent', () => {
  let component: HududlarComponent;
  let fixture: ComponentFixture<HududlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HududlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HududlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
