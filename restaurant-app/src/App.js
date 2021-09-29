import './App.css' ;
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from "./components/Home"
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate"
import {Navbar,Container,Nav} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
       <Router>
       <Navbar  bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#create"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>

            <Nav.Link href="#search"><Link to="/search">Serach</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
          </Nav>
          </Container>
  </Navbar>
       
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
