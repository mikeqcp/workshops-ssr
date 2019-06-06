import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, List, Item } from './home.styles';
import { H1 } from '../../theme/typography';
import { renderWhenNotNil } from '../../shared/utils/rendering';

export class Home extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    getPokemonList: PropTypes.func.isRequired,
    list: PropTypes.array,
  };

  componentDidMount() {
    this.props.getPokemonList();
  }

  renderList = renderWhenNotNil(() => (
    <List>
      {this.props.list.map(pokemon => (
        <Item to={`/${this.props.language}/${pokemon.name}`} key={pokemon.name}>
          {pokemon.name}
        </Item>
      ))}
    </List>
  ));

  render() {
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />

        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>

        <LanguageSwitcher />

        {this.renderList(this.props.list)}
      </Container>
    );
  }
}
