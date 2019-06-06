import { expectSaga } from 'redux-saga-test-plan';
import Immutable from 'seamless-immutable';

import { watchPokemon } from '../pokemon.sagas';
import { PokemonActions, PokemonTypes } from '../pokemon.redux';

describe('Pokemon: sagas', () => {
  const defaultState = Immutable({});

  it('should implement a test', async () => {
    await expectSaga(watchStartup)
      .withState(defaultState)
      .put(PokemonActions.noop())
      .dispatch(StartupActions.startup())
      .run();

    expect(sagaTester.getCalledActions()).to.deep.equal([PokemonActions.noop()]);
  });
});
