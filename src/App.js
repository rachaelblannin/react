import logo from './logo.svg';
import './App.css';
import Products from "./components/props/Products";
import Counter from "./components/Counter";
import Content from "./components/sampleData.json";
import Person from './components/Person';
import Movie from './components/movie';
import SearchableList from './components/SearchableList';
import Navigation from './components/Navigation';
import Home from './components/Home';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <nav>
      <Router>
        <Link to="/Home">
          Home
        </Link>
        <Link to="/SearchableList">
          Search List
        </Link>
        <Navigation/>
      
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/SearchableList" element={<SearchableList/>}/>
        </Routes>
      </Router>
      </nav>

      <Home/>
      <Movie/>

      <SearchableList/>

      {/* <Person />

      <Products />
      <Products
        name="Pencil"
        price={1.00}
        description="to write stuff with!"
      />
      <Products
        name="ruler"
        price={1.00}
        description="to measure stuff with!"
      /> */}

      {/* <Counter /> */}
      {
        Content.map(person => <Person key={person.id} name={person.name} city={person.address.city} />)
      }
      <pre>
        {JSON.stringify(Content, null, 2)}
      </pre>
    </div>
  );
}

export default App;


