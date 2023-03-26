import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {img, name,price,ratings,seller} = props.product
    return (
        
        <div className='product'>
            <img  src={img} alt="" />

           <div className='product-info'>
           <h4>{name}</h4>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>ratings : {ratings}</p>
           </div>
            <div>

            <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;