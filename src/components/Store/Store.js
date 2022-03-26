import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let handleClick = (product) => {
        let newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </h2>
                <p>{cart.length}</p>
            </div>
        </div>
    );
};

export default Store;