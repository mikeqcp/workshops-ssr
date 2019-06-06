import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';

import { Details } from './details.component';
import { PokemonActions, selectSinglePokemonData } from '../../modules/pokemon';

const mapStateToProps = createStructuredSelector({
  data: selectSinglePokemonData,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSinglePokemon: PokemonActions.getSingle,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Details);
