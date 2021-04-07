import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemon } = this.props;

    return <div>{pokemon && <Pokemon pokemon={pokemon} />}</div>;
  }
}
