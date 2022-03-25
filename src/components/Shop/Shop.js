import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('sofa.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='d-flex row'>
            <div className="product-container col-md-9">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container col-md-3">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;