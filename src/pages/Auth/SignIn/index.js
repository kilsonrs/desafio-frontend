import React, { Component } from 'react';

import Button from '~/styles/components/Button';

import { Container, SignForm } from '../styles';

import Logo from '~/assets/images/logo.svg';

class SignIn extends Component {
  state = {
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
    const { email, password } = this.state;
    return (
      <Container>
        <img src={Logo} alt="logo" />
        <SignForm onSubmmit={this.handleSubmit}>
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
            Entrar
          </Button>
        </SignForm>
        <a href="/signup">Criar conta grátis</a>
      </Container>
    );
  }
}

export default SignIn;
