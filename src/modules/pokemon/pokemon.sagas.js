import { all, put, takeLatest } from 'redux-saga/effects';
import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';

import { PokemonTypes, PokemonActions } from './pokemon.redux';

export function* getPokemonList() {
  try {
    const { data } = yield api.get('/pokemon?offset=0&limit=100');

    yield put(PokemonActions.getListSuccess(data.results));
  } catch (error) {
    yield put(PokemonActions.getListFailure(error));

    if (!error.response) {
      /* istanbul ignore next */
      reportError(error);
    }
  }
}

export function* getSinglePokemon({ name }) {
  try {
    const { data } = yield api.get(`/pokemon/${name}`);

    yield put(PokemonActions.getSingleSuccess(data));
  } catch (error) {
    yield put(PokemonActions.getSingleFailure(error));

    if (!error.response) {
      /* istanbul ignore next */
      reportError(error);
    }
  }
}

export function* watchPokemon() {
  yield all([takeLatest(PokemonTypes.GET_LIST, getPokemonList), takeLatest(PokemonTypes.GET_SINGLE, getSinglePokemon)]);
}
