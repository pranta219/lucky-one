import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Watch Store <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon></h1>
            <h3>Watch That Make's You Feel Rich</h3>
        </div>
    );
};

export default Header;