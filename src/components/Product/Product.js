import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // let { handleClick, product } = props
    let { name, img, price } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" ></img>
            <div className='name'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleClick(props.product)} className='btn'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;