import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faRemove } from '@fortawesome/free-solid-svg-icons';
import './Watch.css'

const Watch = ({ cart, resetBtn }) => {
    let chooseOne = () => {
        let arrLength = cart.length
        let rendomProducts = Math.floor(Math.random() * arrLength)
        alert(cart[rendomProducts].name)
    }


    return (
        <div className='watch'>
            <h2>Cart <span>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </span>

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