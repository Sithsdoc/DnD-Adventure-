import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to the Jungle
        </a>
      </header>
    </div>
  );
}*/

export default function HomePage(){
  return(
    <div className='content'>
      <div className='section1'>
        <header>
          <p className='logo'>DnD logo here</p>
          <p className='profile'>Profile</p>
        </header>
      </div>

      <div className='section2'>
        <label className='speciesBox'>
          Species:
          <select name="selectedSpecies">
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="human">Human</option>
          </select>
        </label>

        <label className='classBox'>
          Class:
          <select name="selectedClass">
            <option value="fighter">Fighter</option>
            <option value="rogue">Rogue</option>
            <option value="cleric">Cleric</option>
          </select>
        </label>

        <label className='subclassBox'>
          Subclass:
          <select name="selectedSubClass">
            <option value="eldritch">Eldritch Knight</option>
            <option value="rune">Rune Knight</option>
            <option value="holy">Holy Knight</option>
          </select>
        </label>

        <button>Search</button>
      </div>
    </div>
  );
}
