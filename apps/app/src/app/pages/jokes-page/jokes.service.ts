import { Injectable } from '@angular/core';
import { Joke } from '../model/joke';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JokePageModel } from './model/joke-page-model';

interface ApiJoke {
  id: string;
  joke: string;
}

interface GetJokesApiResponse {
  results: ApiJoke[];
  total_jokes: number;
}

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private readonly httpService: HttpClient) {}

  getJokesWithTotal(): Observable<JokePageModel> {
    return this.httpService
      .get<GetJokesApiResponse>('https://icanhazdadjoke.com/search', {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        map((response) => ({
          total: response.total_jokes,
          jokes: response.results.map((j) => ({
            id: j.id,
            pun: j.joke,
          })),
        }))
      );
  }

  getJokes(): Observable<Joke[]> {
    return this.httpService
      .get<GetJokesApiResponse>('https://icanhazdadjoke.com/search', {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        map((response) =>
          response.results.map((j) => ({
            id: j.id,
            pun: j.joke,
          }))
        )
      );
  }
}
