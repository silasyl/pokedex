import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, picture, pictureShiny } = pokemon;

    return (
      <div>
        <span>
          <h4>Número: </h4>
        </span>
        <h5>{id}</h5>
        <span>
          <h4>Nome: </h4>
        </span>
        <h5>{name}</h5>
        <span>
          <img src={picture} alt={name} />
          <img src={pictureShiny} alt={name} />
        </span>
      </div>
    );
  }
}
