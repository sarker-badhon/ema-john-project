import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
   
    // const cart = props.cart; //option 1
    //const {cart} = props; //option 2
    //  console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
       totalPrice= totalPrice+product.price;
       totalShipping = totalShipping + product.shipping;
    }
    
    const tax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + tax;
   
    return (
        <div className='cart'>
            <h2>Cart Summary :</h2>
            <hr/>
               <p>Selected items : {cart.length}</p>
               <hr/>
               <p>Total Price : ${totalPrice} </p>
               <hr/>
               <p>Total Shipping : ${totalShipping} </p>
               <hr/>
               <p>Tax : ${tax.toFixed(2)} </p>
               <hr/>
               <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;