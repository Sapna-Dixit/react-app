import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from "./components/Home"
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate"


function App() {
  return (
    <div className="App">
       <Router>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/create">Create</Link></li>
           <li><Link to="/list">List</Link></li>
           <li><Link to="/details">Details</Link></li>
           <li><Link to="/search">Serach</Link></li>
           <li><Link to="/update">Update</Link></li>
         </ul>
         <Route exact path="/">
              <Home /> 
         </Route>
         <Route path="/list">
            <RestaurantList />
         </Route>
         <Route path="/create">
            <RestaurantCreate />
         </Route>
        <Route path="/details">
            <RestaurantDetails />
        </Route>
        <Route path="/search">
            <RestaurantSearch />
        </Route>
        <Route path="/update">
            <RestaurantUpdate /> 
        </Route>

       </Router>
    </div>
  );
}

export default App;
