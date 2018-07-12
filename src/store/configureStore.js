import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import libraryReducer from '../reducers/libraryR';
import filterReducer from '../reducers/filtersR';
import thunk  from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            name: 'Shubham Bhiwaniwala',
            age: 24,
            summary: '',
            email: 'shubhambhiwaniwala@gmail.com',
            githubLink: '',
            webLink: '',
            library: libraryReducer,
            filters: filterReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}

export default configureStore;
