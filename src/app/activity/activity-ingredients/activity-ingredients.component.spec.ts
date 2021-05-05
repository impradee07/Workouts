import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityIngredientsComponent } from './activity-ingredients.component';

describe('ActivityIngredientsComponent', () => {
  let component: ActivityIngredientsComponent;
  let fixture: ComponentFixture<ActivityIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
