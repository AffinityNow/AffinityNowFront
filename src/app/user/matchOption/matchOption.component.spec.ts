import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOptionComponent } from './matchOption.component';

describe('MatchOptionComponent', () => {
  let component: MatchOptionComponent;
  let fixture: ComponentFixture<MatchOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
