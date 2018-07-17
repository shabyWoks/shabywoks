import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => {
        if(isAuthenticated){
            return <Component {...props} />
        }
        else{
            return <Redirect to="/login" />
        }
    }}/>
)

const mapStateToProps = (state) => {
    return{
        isAuthenticated: !!state.auth.uid
    }
}

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)
export default ConnectedPrivateRoute;