import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilpplComponent } from './profilppl.component';

describe('ProfilpplComponent', () => {
  let component: ProfilpplComponent;
  let fixture: ComponentFixture<ProfilpplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilpplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilpplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
