import React, { Component } from 'react';

import { Container, Content } from './styles';
import Button from '~/styles/components/Button';

export default class NewMeetup extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Content>
          <span>Título</span>
          <input type="text" placeholder="Digite o título do meetup" />
          <span>Descrição</span>
          <input type="text" placeholder="Descreva seu meetup" />
          <span>Data/hora</span>
          <input type="text" placeholder="Quando o meetup vai acontecer?" />
          <span>Imagem</span>
          <input type="text" placeholder="" />

          <span>Localização</span>
          <input type="text" placeholder="Onde seu meetup irá acontecer?" />

          <span>Tema do meetup</span>
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
            Criar conta
          </Button>
        </Content>
      </Container>
    );
  }
}
