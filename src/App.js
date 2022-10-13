import logo from './logo.svg';
import './App.css';
import Person from './person';

function App() {
  return (
    <div className="App">
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
        <h1><b>The life of Brian the Cat</b></h1>
        
          <ol>
            <li>Bites knees</li>
            <li>Trashes the house</li>
          </ol>
        <p>My cat Brian should have been named Chucky</p>
        <Person/>

      
      </header>
    </div>
  );
}

export default App;


