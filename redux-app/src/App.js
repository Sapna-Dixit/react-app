import './App.css'
import Users from './components/Users';
import HomeContainer from  './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {
           // <Users data ={{name:'Andrew anderson',age:26}}/>   
         }
          <HomeContainer />      
      </header>
    </div>
  );
}

export default App;
