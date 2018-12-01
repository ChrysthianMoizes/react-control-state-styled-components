import React, { Component } from 'react';

import { Container, Title, Button } from './styles';
import ButtonTest from './ButtonTest';

class App extends Component {

  state = {
    nome: 'Chrysthian',
    sobrenome: 'Moizes',
    atual: '',
    text: 'Sem click',
  };

  handleName = () => {
    this.setState({
      atual: this.state.nome,
      text: 'Clicado em nome'
    });
  }

  handleSobrenome = () => {
    this.setState({
      atual: this.state.sobrenome,
      text: 'Clicado em sobrenome'
    });
  }

  render() {
    return (
      <Container>
        <Title fontSize={24}>
          Olá Mundo
          <p>{this.state.atual}</p>
        </Title>
        <Button onClick={this.handleName}>Nome</Button>
        <Button onClick={this.handleSobrenome} primary>Sobrenome</Button>
        <ButtonTest click={this.handleName} text={this.state.text}></ButtonTest>
      </Container>
    );
  }
}

export default App;
