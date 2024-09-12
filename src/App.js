import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="BIENVENIDOS" />
    </div>
  );
}

export default App;
