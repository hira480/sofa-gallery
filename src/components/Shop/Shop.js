import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('sofa.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handelAddToCart = (product) => {
        console.log(product.name);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='d-flex shop row'>
            <div className="col-md-9">
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handelAddToCart={handelAddToCart}
                        ></Product>)
                    }
                </div>

            </div>
            <div className="cart-container col-md-3">
                <h2>Selected Items</h2>
                <p>Clicked Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;