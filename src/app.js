import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {startSetLibraryItem} from './actions/libraryA';
const store = configureStore();

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetLibraryItem()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

