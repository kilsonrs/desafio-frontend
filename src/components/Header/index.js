import React from 'react';

import { Container, Actions, Profile } from './styles';
import Logo from '~/assets/images/logo-white.svg';
import ProfileLogo from '~/assets/images/person_outline.svg';

const Header = () => (
  <Container>
    <Actions>
      <img src={Logo} alt="logo" />
      <a href="/">Início</a>
      <a href="/">Buscar</a>
      <a href="/new">Novo meetup</a>
    </Actions>
    <Profile>
      <img src={ProfileLogo} alt="logo" />
    </Profile>
  </Container>
);

export default Header;
