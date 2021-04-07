// Idéia: busca de pokemon por nome ou ID
// Retorna imagem dele, sprite shiny, grafico mostrando os stats?
// Mostrar tags de acordo com o tipo do pokemon tb
// https://pokeapi.co/
// v.0.1 Só funciona com nome inteiro correto
// Trocar botão por figura
// Tratar nome, colocar 1o maiuscula
// Implementar o enter
// Tratar maiuscula, minuscula, parte do nome

import React, { Component } from 'react';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: '',
      pokemonData: [],
    };
  }

  handleChangeFilter = (text) => {
    this.setState({
      filter: text,
    });
  };

  handleGetPokemon = async () => {
    const searchText = this.state.filter;

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
    const json = await data.json();

    const { id, name, sprites } = json;
    const pokemonData = {
      id,
      name,
      picture: sprites.front_default,
      pictureShiny: sprites.front_shiny,
    };

    this.setState({
      pokemonData: Object.assign([], pokemonData),
    });
  };

  render() {
    const { filter, pokemonData } = this.state;

    return (
      <div>
        <Header
          filter={filter}
          pokemonData={pokemonData}
          onChangeFilter={this.handleChangeFilter}
          onClickButton={this.handleGetPokemon}
        />
      </div>
    );
  }
}
