import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPageComponent } from './jokes-page.component';
import { JokesService } from './jokes.service';
import { FavoritesService } from '../favorites-page/favorites.service';
import { JokePageModel } from './model/joke-page-model';
import { Observable, of } from 'rxjs';

describe('JokesPageComponent', () => {
  let component: JokesPageComponent;
  let jokesService: JokesService;
  let favoriteService: FavoritesService;
  let fixture: ComponentFixture<JokesPageComponent>;

  beforeEach(async () => {
    jokesService = {
      getJokesWithTotal(): Observable<JokePageModel> {
        return of({ total: 45, jokes: [] });
      },
    } as JokesService;
    favoriteService = {} as FavoritesService;

    await TestBed.configureTestingModule({
      imports: [JokesPageComponent],
      providers: [
        { provide: JokesService, useValue: jokesService },
        { provide: FavoritesService, useValue: favoriteService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no-joke card when there are no joke returned', function () {
    const element = fixture.nativeElement.querySelector('.no-joke');
    expect(element).toBeDefined();
    expect(element.textContent).toBe('Oh no!');
  });

  it('should display the favorite joke if it is set', function () {
    component.favoriteJoke = 'Que fait une fraise...';

    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('#favorite-joke');
    expect(element).toBeTruthy();
  });

  it('should match snapshot', function () {
    component.favoriteJoke = 'Que fait une fraise...';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
