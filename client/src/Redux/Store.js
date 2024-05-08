import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CategoryReducer } from './Reducer/CategoryReducer';
import { ProductDetailsReducer, ProductReducer } from './Reducer/ProductReducer';
import { cartReducer } from './Reducer/CartReducer';
import { UserReducer } from './Reducer/UserReducer';
import { AddressReducer } from './Reducer/AddressReducer';
import { OrderReducer } from './Reducer/OrderReducer';


const reducer = combineReducers({
    cat: CategoryReducer,
    products: ProductReducer,
    productDetails: ProductDetailsReducer,
    cart: cartReducer,
    user: UserReducer,
    address: AddressReducer,
    orders: OrderReducer,
});
let initializeState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
};

// const middleware = [thunk]

//createStore
const store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)));
export default store;