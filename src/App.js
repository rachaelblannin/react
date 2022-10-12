import logo from './logo.svg';
import './App.css';

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
        <a>
          <ol>
            <li>Bites knees</li>
            <li>Trashes the house</li>
          </ol>
        </a>
        <p>My cat Brian should have been named Chucky</p>

        const profile = () => {
          const person = {
            firstName: "Rach",
            lastName: "B",
            address: "Castle d'Brian"
          }
        
          return (
            <div>
              <h1>person.firstName</h1>
              <h1>person.lastName</h1>
              <h1>person.address</h1>
            </div>
          );
          export default profile;
      </header>
    </div>
  );
}

export default App;
