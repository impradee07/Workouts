import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPizzaBuilderComponent } from './activity-pizza-builder.component';

describe('ActivityPizzaBuilderComponent', () => {
  let component: ActivityPizzaBuilderComponent;
  let fixture: ComponentFixture<ActivityPizzaBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPizzaBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPizzaBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
