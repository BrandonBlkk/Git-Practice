import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const hiddenPaths = ['/signup', '/signin'];
    
    const isHiddenPath = hiddenPaths.includes(location.pathname);

    return (
        <>
            {!isHiddenPath && (
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            )}
        </>
    );
}

export default Navbar;

