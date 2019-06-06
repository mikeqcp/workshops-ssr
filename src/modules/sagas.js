import { all, fork } from 'redux-saga/effects';

import reportError from '../shared/utils/reportError';
import { watchStartup } from './startup/startup.sagas';
import { watchPokemon } from './pokemon/pokemon.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  try {
    yield all([
      fork(watchStartup),
      fork(watchPokemon),
      //<-- INJECT MODULE SAGA -->
    ]);
  } catch (e) {
    yield reportError(e);
  }
}
