import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Planner from './components/Planner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <input placeholder="Start"/>
      <input placeholder="Destination"/>
      <Planner />
    </div>
  );
}

export default App;
