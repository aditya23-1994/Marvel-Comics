import React from 'react';
import '../../App.css';

export const CardList = (props) => (
    <div className="Card-list">
    {props.characters.map(
      character => (
        <div key = {character.id}>
          <img src={`${character.thumbnail.path}/portrait_fantastic.jpg`}/> 
          <h2>{character.name}</h2>
        </div>
      )
    )}
    </div>
);