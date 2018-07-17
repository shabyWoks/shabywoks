import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Library from '../components/Library';
import AddLibraryItem from '../components/AddLibraryItem';
import EditLibraryItem from '../components/EditLibraryItem';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from '../router/PrivateRoute';
import PublicRoute from '../router/PublicRoute';

export const history = createHistory();

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div className="app-router-class">
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/my-library" component={Library} />
                    <PublicRoute path="/login" component={LoginPage} />
                    <PrivateRoute path="/add-new-library-item" component={AddLibraryItem} />
                    <PrivateRoute path="/edit-library-item/:id" component={EditLibraryItem} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;