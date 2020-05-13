import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
