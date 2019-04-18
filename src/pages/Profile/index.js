import React, { Component } from 'react';

import { Container, Content } from './styles';
import Button from '~/styles/components/Button';

export default class NewMeetup extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Content>
          <span>Nome</span>
          <input name="name" placeholder="Digite seu nome" />

          <span>Senha</span>
          <input type="password" name="password" placeholder="Sua senha secreta" />

          <span>Confirmação de senha</span>
          <input type="password" name="password" placeholder="Sua senha secreta" />
          <span>Preferências</span>
          <ul>
            <li>
              <input type="checkbox" />
              <small>Front-end</small>
            </li>
            <li>
              <input type="checkbox" />
              <small>Back-end</small>
            </li>
            <li>
              <input type="checkbox" />
              <small>Mobile</small>
            </li>
            <li>
              <input type="checkbox" />
              <small>DevOps</small>
            </li>
            <li>
              <input type="checkbox" />
              <small>Gestão</small>
            </li>
            <li>
              <input type="checkbox" />
              <small>Marketing</small>
            </li>
          </ul>
          <Button size="big" type="submit">
            Salvar
          </Button>
        </Content>
      </Container>
    );
  }
}
