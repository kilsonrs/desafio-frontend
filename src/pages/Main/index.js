import React from 'react';

import { Container, Content, ScroolList } from './styles';

import Card from '~/components/Card';
import CardImage from '~/assets/images/image1x.png';
import Search from '~/components/Search';

const meetups = [
  {
    id: 1,
    title: 'Meetup de react',
    members: 120,
    image: CardImage,
  },
  {
    id: 2,
    title: 'Meetup de react',
    members: 120,
    image: CardImage,
  },
  {
    id: 3,
    title: 'Meetup de react',
    members: 120,
    image: CardImage,
  },
];

const Main = () => (
  <Container>
    <Content>
      <Search />
      <strong>Inscrições</strong>
      <ScroolList>
        {meetups.map(item => (
          <Card key={item.id} title={item.title} members={item.members} image={item.image} />
        ))}
      </ScroolList>
      <strong>Próximos meetups</strong>
      <ScroolList>
        {meetups.map(item => (
          <Card key={item.id} title={item.title} members={item.members} image={item.image} />
        ))}
      </ScroolList>
      <strong>Recomendados</strong>
      <ScroolList>
        {meetups.map(item => (
          <Card key={item.id} title={item.title} members={item.members} image={item.image} />
        ))}
      </ScroolList>
    </Content>
  </Container>
);

export default Main;
