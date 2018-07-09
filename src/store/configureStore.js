import {createStore, combineReducers} from 'redux';
import libraryReducer from '../reducers/libraryR';
import filterReducer from '../reducers/filtersR';

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
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default configureStore;
