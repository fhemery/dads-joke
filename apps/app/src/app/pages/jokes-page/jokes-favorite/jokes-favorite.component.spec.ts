import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesFavoriteComponent } from './jokes-favorite.component';

describe('JokesFavoriteComponent', () => {
  let component: JokesFavoriteComponent;
  let fixture: ComponentFixture<JokesFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JokesFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
