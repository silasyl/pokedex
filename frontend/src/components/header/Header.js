import React, { Component } from 'react';
import Pokedex from '../pokedex/Pokedex';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  handleClick = () => {
    this.props.onClickButton();
  };

  render() {
    const { input, pokemonData } = this.props;

    return (
      <div>
        <h2>Pokedéx v.0.2</h2>
        <span>Digite pokémon ou número:</span>
        <input
          placeholder="Digite aqui"
          type="text"
          value={input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEnterPress}
        />
        <button onClick={this.handleClick}>BUSCAR</button>
        <Pokedex pokemon={pokemonData} />
      </div>
    );
  }
}
