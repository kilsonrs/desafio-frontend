import React, { Component } from 'react';

import Button from '~/styles/components/Button';

import { Container, SignForm } from '../styles';

import Logo from '~/assets/images/logo.svg';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = this.state;
    // const { signInRequest } = this.props;
    // signInRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <img src={Logo} alt="logo" />
        <SignForm onSubmmit={this.handleSubmit}>
          <span>Nome</span>
          <input
            name="name"
            value={name}
            placeholder="Digite seu nome"
            onChange={this.handleInputChange}
          />

          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={this.handleInputChange}
          />

          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Sua senha secreta"
            onChange={this.handleInputChange}
          />
          <Button size="big" type="submit">
            Criar conta
          </Button>
        </SignForm>
        <a href="/signin">Já tenho conta</a>
      </Container>
    );
  }
}

export default SignUp;
