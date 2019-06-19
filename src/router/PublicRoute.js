import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => {
        if(isAuthenticated){
            return <Redirect to="/my-library" />
        }
        else{
            return <Component {...props} />
        }
    }}/>
)

const mapStateToProps = (state) => {
    return{
        isAuthenticated: !!state.auth.uid
    }
}

const ConnectedPublicRoute = connect(mapStateToProps)(PublicRoute)
export default ConnectedPublicRoute;