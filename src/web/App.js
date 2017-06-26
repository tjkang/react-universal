import React, { Component } from 'react';
import styled from 'styled-components/primitives';

import logo from './logo.svg';
import './App.css';

import Hello from '../shared/HelloComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledLayout>
          <Hello />
        </StyledLayout>
      </div>
    );
  }
}

const StyledLayout = styled.View`
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default App;
