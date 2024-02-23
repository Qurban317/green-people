import * as React from 'react'; 
import './App.css';
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Component/Home';
import {About} from './Component/About';
import { Sidebar } from './Component/Sidebar/Sidebar';
//import { Header } from './Component/Header/Header';


function App() {
  return (
    <>
    
    <Sidebar/>
    <div className='MainContent'>
    {/* <Header/> */} 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
    </Routes>
    </div>
    
    </>
    
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
