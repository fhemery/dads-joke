import { JokeDetailComponent } from './joke-detail.component';
import { take } from 'rxjs';

describe('JokeDetailComponent', () => {
  let component: JokeDetailComponent;

  /* Here we test the component Typescript part only */
  beforeEach(() => {
    component = new JokeDetailComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setFavorite', function () {
    it('should emit the joke when called', function (done) {
      // ARRANGE
      component.joke = { id: '1', pun: 'Que fait une fraise...' };

      // ASSERT
      component.isFavorite.pipe(take(1)).subscribe((result) => {
        expect(result.id).toBe('1');
        done();
      });

      // ACT
      component.setFavorite();
    });
  });
});
