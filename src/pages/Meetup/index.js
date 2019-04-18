import React from 'react';

import { Container, Content, Detail } from './styles';
import Icon from '~/assets/images/image2x.png';
import Button from '~/styles/components/Button';

const Meetup = () => (
  <Container>
    <Content>
      <img src={Icon} alt="meetup" />
      <Detail>
        <strong>Meetup React Native</strong>
        <small>120 membros</small>
        <p>
          O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
          desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis
          multiplataforma com Javascript.
        </p>

        <small>Realizado em:</small>
        <span>Rua Guilherme Gembala, 260, Rio do Sul - SC</span>

        <small>Quando?</small>
        <span>7 de Abril de 2019 às 19h</span>
      </Detail>
      <Button size="big" type="submit">
        Inscreva-se
      </Button>
    </Content>
  </Container>
);

export default Meetup;
