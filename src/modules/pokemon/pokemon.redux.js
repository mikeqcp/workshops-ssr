import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: PokemonTypes, Creators: PokemonActions } = createActions(
  {
    getList: [],
    getListSuccess: ['data'],
    getListFailure: ['error'],
    getSingle: ['name'],
    getSingleSuccess: ['data'],
    getSingleFailure: ['error'],
  },
  { prefix: 'POKEMON/' }
);

export const INITIAL_STATE = new Immutable({
  list: null,
  data: null,
});

export const handleGetListSuccess = (state, { data }) => state.set('list', data);

export const handleGetSingleSuccess = (state, { data }) => state.set('data', data);

export const reducer = createReducer(INITIAL_STATE, {
  [PokemonTypes.GET_LIST_SUCCESS]: handleGetListSuccess,
  [PokemonTypes.GET_SINGLE_SUCCESS]: handleGetSingleSuccess,
});
