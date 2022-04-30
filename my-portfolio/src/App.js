import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div></div>
        <div className="name">
          <h1>Kyle Sousa</h1>
        </div>
        <div>
          <ul className="nav-links">
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
