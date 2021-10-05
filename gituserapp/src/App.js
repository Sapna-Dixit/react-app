import UseEffectAPI from './UseEffectAPI';
import './App.css';
import UseRef1 from './useRef1';
import UseState2 from './UseState2';
import  UseReducer1 from  './UseReducer1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
       // <UseEffectAPI />
        }
      <UseRef1 />
      <UseState2 /><hr/>
      <UseReducer1 />
      </header>
    </div>
  );
}

export default App;
