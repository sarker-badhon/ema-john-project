import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products , setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data =>setProducts(data))
    },[])

    useEffect(() => {
        const storedCart =  getShoppingCart()
    },[])

// cart button-----handler
    const handleCartBtn = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id)

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
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;