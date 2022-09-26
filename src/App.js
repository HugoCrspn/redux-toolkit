import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import FigurinesList from './components/FigurinesList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <FigurinesList />
    </div>
  );
}

export default App;