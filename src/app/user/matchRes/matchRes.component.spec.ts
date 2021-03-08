import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResComponent } from './matchRes.component';

describe('ListeMatchComponent', () => {
  let component: MatchResComponent;
  let fixture: ComponentFixture<MatchResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
