import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Library from '../components/Library';
import AddLibraryItem from '../components/AddLibraryItem';
import EditLibraryItem from '../components/EditLibraryItem';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div className="app-router-class">
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/my-library" component={Library} />
                    <Route path="/add-new-library-item" component={AddLibraryItem} />
                    <Route path="/edit-library-item/:id" component={EditLibraryItem} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;