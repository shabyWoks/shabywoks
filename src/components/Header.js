import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <ul>
                <Link to="/" > Dashboard </Link>
                <Link to="/my-library" > My Library </Link>
            </ul>
        </div>
    )
}

export default Header;