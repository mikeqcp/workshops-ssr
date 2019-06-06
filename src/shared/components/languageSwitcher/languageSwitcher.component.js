import React, { PureComponent } from 'react';

import { Container, Link } from './languageSwitcher.styles';
import { appLocales } from '../../../i18n';

export class LanguageSwitcher extends PureComponent {
  render() {
    return (
      <Container>
        {appLocales.map((locale, index) => (
          <Link to={`/${locale}`} key={index}>
            {locale}
          </Link>
        ))}
      </Container>
    );
  }
}
