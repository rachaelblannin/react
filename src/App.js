import logo from './logo.svg';
import './App.css';
import Products from "./components/props/Products";
import Counter from "./components/Counter";
import Content from "./components/sampleData.json";
import Person from './components/Person';
import Movie from './components/movie';


function App() {
  return (
    <div className="App">

      <Movie/>

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


