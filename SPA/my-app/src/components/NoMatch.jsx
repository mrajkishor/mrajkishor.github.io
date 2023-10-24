import React from 'react';
import '../assets/css/NoMatch.scss';

function NoMatch(props) {
    return (
        <>
        <div className='no-match-found'>
            <div>
                <p>
                404 - Page not found
                </p>
                <p>
                    Please explore via the Navbar.
                </p>
      
            </div>
        </div>
        </>
    );
}

export default NoMatch;