import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Planner from './components/Planner';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E7D2CC' }}>
     <div className="navbar-and-planner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <NavBar />
        <Planner />
      </div>
      <Banner />
    </div>
  );
}

export default App;
