import React from 'react';

import { Container, Details, Content } from './styles';
import Icon from '~/assets/images/chevron_right.svg';

const Card = ({ image, title, members }) => (
  <Container>
    <img src={image} alt="image_event" />
    <Content>
      <Details>
        <strong>Meetup React Native</strong>
        <small>120 membros</small>
      </Details>

      <button type="submit" onClick={() => {}}>
        <img src={Icon} alt="Ir" />
      </button>
    </Content>
  </Container>
);

export default Card;
