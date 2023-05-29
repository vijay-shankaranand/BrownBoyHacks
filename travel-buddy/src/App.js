import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "https://thebeachmuse.com/wp-content/uploads/2021/03/DSC_8652.jpg" 
        alt="logo" 
        style={{ width: '100%', objectFit: 'cover' , height: '500px' , objectPosition: 'bottom center' }}/>
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
    </div>
  );
}

export default App;
