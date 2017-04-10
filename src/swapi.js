import fetch from 'node-fetch';

const SWAPI = 'http://swapi.co/api';

const processSingle = promise =>
  promise.then(res => res.json())
    .catch(err => {
      console.log('error!', err);

      return [];
    });

const processList = promise =>
  promise.then(res => res.json())
    .then(res => res.results)
    .catch(err => {
      console.log('error!', err);

      return [];
    });

export const getFilms = () =>
  processList(fetch(`${SWAPI}/films`));

export const getFilm = id =>
  processSingle(fetch(`${SWAPI}/films/${id}`));

export const getCharacters = () =>
  processList(fetch(`${SWAPI}/people`));

export const getCharacter = id =>
  processSingle(fetch(`${SWAPI}/people/${id}`));
