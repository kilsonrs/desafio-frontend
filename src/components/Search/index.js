import React, { Component } from 'react';

import { Container } from './styles';

export default class Search extends Component {
  state = {
    searchInput: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <Container>
        <input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={this.handleInputChange}
          placeHolder="Buscar meetups"
        />
      </Container>
    );
  }
}
