import React from 'react';
import {Link} from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';

const Header = (props) => {
    return (
        <div className="header-class">
            <ul>
                <Link className="header-link" to="/" > Dashboard </Link>
                <Link className="header-link" to="/my-library" > My Library </Link>
                <Link className="header-link" to="/playground" > Playground </Link>
                {
                    !props.uid ? 
                    <Link className="header-link" to="/login">Log In</Link> :
                    <button className="header-link" onClick={props.startLogout}>Log Out</button>
                }
                
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    };
}

const mapDispatchToProps = (dispatch) => {
    return () => ({
        startLogout: () => dispatch(startLogout())
    });
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;