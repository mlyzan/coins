import {createStore, combineReducers} from 'redux';
import itemReducer from './itemReducer';
import searchReducer from './searchReducer';
let reducers = combineReducers({
    coins: itemReducer,
    search: searchReducer
});
let store = createStore(reducers);
export default store;