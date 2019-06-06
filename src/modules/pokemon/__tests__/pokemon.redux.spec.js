import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { reducer as pokemonReducer, PokemonActions, PokemonTypes } from '../pokemon.redux';

describe('Pokemon: redux', () => {
  const state = Immutable({});

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(pokemonReducer(undefined, {})).to.deep.equal(state);
    });

    it('should return state on unknown action', () => {
      expect(pokemonReducer(state, { type: 'unknown-action' })).to.deep.equal(state);
    });
  });
});
