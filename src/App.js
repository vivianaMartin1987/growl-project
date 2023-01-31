import logo from './logo.svg';
import './App.css';
import GrowlComponent from './Components/growlComponent';
import GrowlActions from './Components/growl';

function App() {
  const [active, setActive] = GrowlActions ()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <a className="App-link" href="#" onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
        <GrowlComponent onDismissed={() => setActive(false)} active={active} message="Hello World!" />

      </header>
    </div>
  );
}

export default App;
