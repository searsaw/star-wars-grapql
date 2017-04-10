import { Character } from './character';
import { getCharacter } from '../swapi';

export const Film = () => [`
  type Film {
    characters: [Character]!
    created: String!
    director: String!
    edited: String!
    episode_id: Int!
    opening_crawl: String!
    producer: String!
    release_date: String!
    title: String!
    url: String!
  }
`, Character];

export const resolvers = {
  Film: {
    characters: film => {
      return Promise.all(
        film.characters
          .map(c => c.split('/')[5])
          .map(id => getCharacter(id))
      );
    }
  }
};
