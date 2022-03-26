import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Watch = ({ cart }) => {
    return (
        <div>
            <h2>Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </h2>
            <p>{cart.length}</p>
        </div>
    );
};

export default Watch;