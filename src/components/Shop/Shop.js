import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products , setProducts] = useState([])
    const [Cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data =>setProducts(data))
    },[])

// cart button-----handler
    const handleCartBtn = (product) =>{
        const newCart = [...Cart,product]
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                 Products.map(product => <Product
                 product = {product}
                 key = {product.id}
                 handleCartBtn = {handleCartBtn}
                 ></Product>)
               }
            </div>
            <div className='cart-container'>
               <h1>Cart Summary</h1>
               <p>selected items:{Cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;