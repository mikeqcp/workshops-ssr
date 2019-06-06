import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectPokemonDomain = prop('pokemon');

export const selectPokemonList = createSelector(
  selectPokemonDomain,
  prop('list')
);

export const selectSinglePokemonData = createSelector(
  selectPokemonDomain,
  prop('data')
);
