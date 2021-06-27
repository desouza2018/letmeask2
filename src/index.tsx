import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

import './styles/global.scss';

//O método render tem como função exibir alguma coisa dentro do html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*document.getElementById('root') busca um elemento html com id = "root" 
e coloca dentro dele o 
   <React.StrictMode>
    <App />
  </React.StrictMode>,

  O <App/> é o que esta sendo exibindo dentro do  id = "root"
  Esse App esta vindo de outro arquivo e, por isso acontece uma 
  importação:
  import App from './App';
  O arquivo App.tsx é uma função chamada App que devolve um 
  <h1>Hello World</h1>
  Obs: se trocarmos o <App> por uma tag html <h1>Hello World</h1
  funcionaria, ou seja, seria exibido no html.
  Logo compreendemos que o método render pode receber elementos(tags) html.
  Entretanto, quando trabalhamos com React, esses elementos(tags) html,
  não são chamados de tags html, mas chamamos de JSXL
  
  HTML dentro do JS é chamado de JSX(Javascript XML)
  XML é a linguagem que dá base para o HTML.
  OBS: Quando estamos usamos o typescript chamamos TSX.
  XML stands for eXtensible Markup Language.
  XML significa linguagem de marcação eXtensible.
  O XML foi projetado para armazenar e transportar dados.
  O XML foi projetado para ser tanto ser humano quanto legível por máquina.
  Link: https://www.w3schools.com/xml/xml_whatis.asp

*/