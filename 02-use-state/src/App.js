import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  let currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El Estado en React - Hook useState</h1>
        <MiPrimerEstado />
        
        <EjercicioComponent
          year={currentYear}
        />
      </header>
    </div>
  );
}

export default App;
