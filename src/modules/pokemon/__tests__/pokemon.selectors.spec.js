import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { selectPokemonDomain } from '../pokemon.selectors';

describe('Pokemon: selectors', () => {
  const state = Immutable({
    pokemon: {},
  });

  describe('selectPokemonDomain', () => {
    it('should select a domain', () => {
      expect(selectPokemonDomain(state)).to.equal(state.pokemon);
    });
  });
});
