import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

function Hello() {
  return(
    <h1>Hello World</h1>
  )
}
class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName name="Kirill" surname="Kotyunin" link="vk.com" />
            <SayFullName name="Alina" surname="Smirnova" link="facebook.com" />
            <SayFullName name="Egor" surname="Ruzanov" link="#" />
        </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>Моё имя {props.name} - фамилия {props.surname}</h1>
      <a href="{props.link}">Ссылка на профиль</a>
    </div>
  )
}

export default App;
