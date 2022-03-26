import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faRemove } from '@fortawesome/free-solid-svg-icons';
import './Watch.css'

const Watch = ({ cart }) => {
    let chooseOne = () => {
        let arrLength = cart.length
        let rendomProducts = Math.ceil(Math.random() * arrLength)
        alert(cart[rendomProducts].name)
    }

    let resetBtn = () => {
        let remove = cart
        let removeBtn = remove
        removeBtn([])
    }
    return (
        <div className='watch'>
            <h2>Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </h2>
            {cart.map(cartItem => <div className="cart-content"
                key={cartItem.id}>
                <img className='cart-image' src={cartItem.img} alt='' />
                <p> {cartItem.name}</p> </div>)}
            <button onClick={chooseOne} className='choose'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <br />
            <button onClick={resetBtn} className='remove'>
                <p>RESET <span><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></span>
                </p>
            </button>
        </div>
    );
};

export default Watch;