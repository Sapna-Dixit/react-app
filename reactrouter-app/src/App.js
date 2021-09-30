import './App.css';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

import {
  Link, BrowserRouter as Router,
   Route,NavLink} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
          <div>
            <h1>React Router Example</h1>
            <ul>
              <li><Link to ="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component ={About}/>
            <Route path ="/contact" component ={Contact} />
          </div>
        </Router><hr/>
       
        <Router>
        <div>
            <h1>React Router Example</h1>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={
                  {color:"red"}
                } >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={
                  {color:"yellow"}
                } >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeStyle={
                  {color:"blue"}
                } >Home</NavLink>
              </li>
            </ul>
        </div>
        </Router>
      </header>
      
    </div>
  );
 
}

export default App;
