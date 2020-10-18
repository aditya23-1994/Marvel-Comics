import React from 'react';
import '../../App.css';

export const SearchBox = (props) => (
    <input 
    className="search" 
    type="search" 
    placeholder={props.placeholder}
    onChange={props.handleChange}
  />
)