import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faRemove } from '@fortawesome/free-solid-svg-icons';
import './Watch.css'

const Watch = ({ cart }) => {

    return (
        <div className='watch'>
            <h2>Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </h2>
            {cart.map(cartItem => <div className="cart-content"
                key={cartItem.id}>
                <img className='cart-image' src={cartItem.img} alt='' />
                <p> {cartItem.name}</p> </div>)}
            <button className='choose'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <br />
            <button className='remove'>
                <p>RESET
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    );
};

export default Watch;