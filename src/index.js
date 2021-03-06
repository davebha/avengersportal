import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import 'tachyons-floats'
import CardList from './CardList';
import { avengersProfile } from './avengersProfile'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div className='tc'>
  	<h1  >Welcome to Avengers portal</h1>
  	<CardList avengers={avengersProfile}  />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
