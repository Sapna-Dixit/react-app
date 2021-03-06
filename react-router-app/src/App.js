import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch >
        <Route exact  path="/" component ={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path ="/contact" component={Contact} />
        <Route exact path ="/users/add" component = {AddUser} />
        <Route exact path ="/users/edit/:id" component ={EditUser}/>
        <Route exact path ="/Users/user/:id" component={User} />
        <Route component = { NotFound } />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
