import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatchComponent } from './listeMatch.component';

describe('ListeMatchComponent', () => {
  let component: ListeMatchComponent;
  let fixture: ComponentFixture<ListeMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
