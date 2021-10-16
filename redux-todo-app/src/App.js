import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Logout  from './components/Logout'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {user ? <Logout />  :<Login /> }
    
     
    </div>
  );
}

export default App;
