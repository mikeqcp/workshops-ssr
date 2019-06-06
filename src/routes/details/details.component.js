import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import { renderWhenTrue } from '../../shared/utils/rendering';
import { Container, Content } from './details.styles';

export class Details extends PureComponent {
  static propTypes = {
    getSinglePokemon: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getSinglePokemon(this.props.match.params.name);
  }

  renderContent = renderWhenTrue(() => (
    <Content>
      <Helmet title={this.props.data.name} />
      {JSON.stringify(this.props.data, undefined, 2)}
    </Content>
  ));

  render() {
    return (
      <Container>
        <Link to={`/${this.props.match.params.lang}`}>Back</Link>
        {this.renderContent(this.props.data && this.props.match.params.name === this.props.data.name)}
      </Container>
    );
  }
}
