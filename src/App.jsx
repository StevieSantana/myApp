import React from 'react';
import './App.css'

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'


function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"B I E N V E N I D E S"}/>
    </>
      
  );
};

export default App;
