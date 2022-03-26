import React from 'react';
import './Prodect.css'

const Product = (props) => {
    // const { handelAddToCart } = props;
    const { name, price, img, } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h5>Price: ${price}</h5>
            </div>
            <button onClick={() => props.handelAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;