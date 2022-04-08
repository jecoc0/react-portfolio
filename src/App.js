import React from 'react';
import About from './components/About';
import './App.css';
import styled from 'styled-components'
import Projects from './components/Projects';
import Navbar from "react-bootstrap/Navbar"
import ghost from './assets/icons/ghost-32x32.png'


function App() {
  return (
    <div>
      <>
        <Navbar className=" p-3 navbar navbar-expand-lg bg-myPink text-dark">
          <Navbar.Brand>
            <img src={ghost}></img>
            <span className="p-2">Jessica Groves</span>
          </Navbar.Brand>

        </Navbar>
        <About></About>
        <Projects />
      </>
    </div>
  );
}

export default App;
