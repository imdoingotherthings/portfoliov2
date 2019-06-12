import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Sidebar from './containers/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar />
      </Container>
    </div>
  );
}

export default App;
