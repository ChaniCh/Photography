import logo from './logo.svg';
import Navigation from './component/navigation.jsx';
import './App.css';
import { Component } from 'react';
import './bootstrap.css';

function App() {
  return (
    <div className = "App">
      <Navigation></Navigation>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   );
}

export default App;
