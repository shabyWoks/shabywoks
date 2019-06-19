import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './router/AppRouter';
import configureStore from './store/configureStore';
import {startSetLibraryItem} from './actions/libraryA';
import '../style/style.scss';
import 'normalize.css/normalize.css';
import Loading from './components/Loading';
import {firebase} from './firebase/firebase';
import { login, logout } from './actions/auth';
const store = configureStore();

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<Loading />, document.getElementById('app'));

store.dispatch(startSetLibraryItem()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        if(history.location.pathname === '/login'){
            history.push("/my-library");
        }
    }
    else{
        store.dispatch(logout());
    }
});

