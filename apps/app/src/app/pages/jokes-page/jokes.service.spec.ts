import { JokesService } from './jokes.service';
import { HttpClient } from '@angular/common/http';
import { of, take } from 'rxjs';

describe('JokesService', () => {
  let service: JokesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = {} as HttpClient;
    service = new JokesService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getJokesWithTotal', function () {
    it('should return the total and the jokes correctly mapped', function (done) {
      // ARRANGE
      httpClient.get = jest.fn().mockReturnValue(
        of({
          total_jokes: 42,
          results: [{ id: 1, joke: 'Comment fait une fraise...' }],
        })
      );

      // ACT
      // let result: JokePageModel = {} as JokePageModel;
      service
        .getJokesWithTotal()
        .pipe(take(1))
        .subscribe((result) => {
          // ASSERT
          expect(result.total).toBe(42);
          expect(result.jokes).toHaveLength(1);
          expect(result.jokes[0].id).toBe(1);
          done();
        });
    });

    it('should call the dads joke url', function (done) {
      const mock = jest.fn().mockReturnValue(
        of({
          total_jokes: 42,
          results: [],
        })
      );
      httpClient.get = mock;

      service
        .getJokesWithTotal()
        .pipe(take(1))
        .subscribe(() => {
          expect(mock).toHaveBeenCalledTimes(1);
          expect(mock).toHaveBeenCalledWith(
            'https://icanhazdadjoke.com/search',
            {
              headers: { Accept: 'application/json' },
            }
          );
          done();
        });
    });
  });
});
