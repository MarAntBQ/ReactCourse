import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  let user_info = {
    email: "hire-me@marantbq.dev",
    phone: "+593982345160"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first React App
        </p>
        <div className='componentes'>
          <TercerComponente
          name = "Marco Antonio"
          lastname = "Bustillos"
          userInfo={user_info}
          />
          <hr/>
          <SegundoComponente />
          <hr/>
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
