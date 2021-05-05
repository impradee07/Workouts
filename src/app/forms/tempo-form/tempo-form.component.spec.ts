import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoFormComponent } from './tempo-form.component';

describe('TempoFormComponent', () => {
  let component: TempoFormComponent;
  let fixture: ComponentFixture<TempoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
