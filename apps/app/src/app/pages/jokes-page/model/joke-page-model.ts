import { Joke } from '../../model/joke';

export interface JokePageModel {
  total: number;
  jokes: Joke[];
}
