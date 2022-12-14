import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Watch from '../Watch/Watch';
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
    let resetBtn = () => {
        setCart([])
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
                <Watch cart={cart} resetBtn={resetBtn}></Watch>
            </div>
        </div>
    );
};

export default Store;