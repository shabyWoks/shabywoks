import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header-class">
            <ul>
                <Link className="header-link" to="/" > Dashboard </Link>
                <Link className="header-link" to="/my-library" > My Library </Link>
            </ul>
        </div>
    )
}

export default Header;