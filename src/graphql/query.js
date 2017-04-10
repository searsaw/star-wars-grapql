import { Character, resolvers as characterResolvers } from './character';
import { Film, resolvers as filmResolvers } from './film';
import merge from 'lodash.merge';
import { getCharacters, getCharacter, getFilms, getFilm } from '../swapi';

export const Query = () => [`
  type Query {
    films: [Film]!
    film(id: ID!): Film
    characters: [Character]!
    character(id: ID!): Character
  }
`, Film, Character];

export const resolvers = merge({}, filmResolvers, characterResolvers, {
  Query: {
    films: getFilms,
    film: (obj, { id }) => getFilm(id),
    characters: getCharacters,
    character: (obj, { id }) => getCharacter(id)
  }
});
