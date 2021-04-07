import React, { Component } from 'react';
import Pokedex from '../pokedex/Pokedex';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  handleClick = () => {
    this.props.onClickButton();
  };

  render() {
    const { filter, pokemonData } = this.props;

    return (
      <div>
        <h2>Pokedéx v.0.1</h2>
        <span>Digite pokémon ou número:</span>
        <input
          placeholder="Digite aqui"
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>BUSCAR</button>
        <Pokedex pokemon={pokemonData} />
      </div>
    );
  }
}
