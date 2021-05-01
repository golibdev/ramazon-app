import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HududComponent } from './hudud.component';

describe('HududComponent', () => {
  let component: HududComponent;
  let fixture: ComponentFixture<HududComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HududComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HududComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
