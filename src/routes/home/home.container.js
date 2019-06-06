import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Home } from './home.component';
import { selectLocalesLanguage } from '../../modules/locales';
import { PokemonActions, selectPokemonList } from '../../modules/pokemon';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  list: selectPokemonList,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPokemonList: PokemonActions.getList,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl,
  withRouter
)(Home);
