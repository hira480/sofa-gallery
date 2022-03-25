import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('sofa.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='d-flex row'>
            <div className="product-container col-md-9">
                <h2>Products: {products.length}</h2>
            </div>
            <div className="cart-container col-md-3">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;