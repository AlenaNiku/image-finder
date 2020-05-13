import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;


// we have to wrapthe navbar component in a div and that div in a muithemeprovider ti be able to use the styles from material ui