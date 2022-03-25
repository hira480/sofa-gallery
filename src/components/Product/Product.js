import React from 'react';
import './Prodect.css'

const Product = (props) => {
    const { name, price, img, id } = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
        </div>
    );
};

export default Product;