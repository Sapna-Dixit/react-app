import  { createStore} from 'redux'
import allReducers from './src/reducers';

const store = createStore(
    allReducers
   
    )

    export default store;