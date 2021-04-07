import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemon, show } = this.props;

    return <div>{show && <Pokemon pokemon={pokemon} />}</div>;
  }
}
