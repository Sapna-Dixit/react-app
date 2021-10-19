import logo from './logo.svg';
import './App.css';
import  FoodApp from './components/food/FoodApp';
import { Provider } from  'react-redux'
import  store from './redux/store'

function App() {
  return (
    <Provider  store = {store}>
    <div className="App">
      
        <FoodApp />
     
    </div>
    </Provider>
  );
}

export default App;
