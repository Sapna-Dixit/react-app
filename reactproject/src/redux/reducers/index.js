
import{combineReducers} from 'redux'
import { selectedProduct } from '../actions/productAction';
import { selectedProductsReducer } from "./productReducer"
import {productReducer} from './productReducer';

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducer
});
export default reducers;

