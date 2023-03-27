import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { img, name, price, ratings, seller } = props.product

    const handleCartBtn = props.handleCartBtn;



    return (

        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>ratings : {ratings}</p>
            </div>
            <div>

                <button onClick={() => handleCartBtn(props.product)} className='btn-cart'>
                    Add to Cart  
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
}

export default Product;