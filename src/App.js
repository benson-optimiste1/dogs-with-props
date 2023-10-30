
import './App.css';
import Dog from './components/Dog';
const dogs = [
  { name: 'Ryder', age: 4, bread: 'PR Street Dog' },
  { name: 'Goldr', age: 5, bread: 'Yellow lab' },
  { name: 'Scouby', age: 7, bread: 'Jack russel Terr.' }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>
        {dogs.map(dog => <Dog age={dog.age}
          name={dog.name}
          bread={dog.bread} />)}

      </header>
    </div>
  );
}

export default App;
