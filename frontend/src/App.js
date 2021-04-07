import React, { Component } from 'react';
import Header from './components/header/Header';
import Error from './components/pokedex/Error';
import Pokedex from './components/pokedex/Pokedex';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      treatedInput: '',
      pokemonData: [],
      showPokemon: false,
      errorFlag: false,
    };
  }

  handleChangeFilter = (text) => {
    this.setState({
      input: text,
      treatedInput: text.toLowerCase(), //treat user upper case input
    });
  };

  handleGetPokemon = async () => {
    let searchText = this.state.treatedInput;

    //treat user input number starting with 0
    if (searchText.charAt(0) === '0') {
      searchText = parseInt(searchText);
    }

    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchText}`
      );
      if (!data.ok || searchText === '') {
        throw Error('Invalid data');
      }

      const json = await data.json();

      const { id, name, sprites } = json;
      const treatedName = name.charAt(0).toUpperCase() + name.slice(1);
      const pokemonData = {
        id,
        name: treatedName,
        picture: sprites.front_default,
        pictureShiny: sprites.front_shiny,
      };

      this.setState({
        pokemonData: Object.assign([], pokemonData),
        showPokemon: true,
        errorFlag: false,
      });
    } catch (err) {
      if (searchText === '') {
        this.setState({
          showPokemon: false,
          errorFlag: false,
        });
      } else {
        this.setState({
          showPokemon: false,
          errorFlag: true,
        });
      }
    }
  };

  render() {
    const { input, pokemonData, showPokemon, errorFlag } = this.state;

    return (
      <div>
        <Header
          input={input}
          pokemonData={pokemonData}
          onChangeFilter={this.handleChangeFilter}
          onClickButton={this.handleGetPokemon}
        />
        <Pokedex pokemon={pokemonData} show={showPokemon} />
        <>{errorFlag && <Error />}</>
      </div>
    );
  }
}
