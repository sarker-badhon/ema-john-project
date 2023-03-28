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
        const saveCart = [];
        //step 1 get id of the addedProduct
        for(const id in storedCart){
            //step 2 :get product from products state By using id
            const addedProduct = Products.find(product => product.id === id)
            if(addedProduct){
                //step 3 : add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                //step 4 : add the added product to the save cart
                saveCart.push(addedProduct)
            }
            console.log(addedProduct)
        }
        //step 5: set the cart
        setCart(saveCart)
    },[Products])

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