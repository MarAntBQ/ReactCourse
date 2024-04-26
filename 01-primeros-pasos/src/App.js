import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first App
        </p>
      {/* Import Component */}
      <MiComponente />      
      </header>
    </div>
  );
}

export default App;
