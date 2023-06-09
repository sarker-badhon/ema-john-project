import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
   
    // const cart = props.cart; //option 1
    //const {cart} = props; //option 2
    //  console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
       totalPrice = totalPrice + product.price * product.quantity;
       totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity
    }
    
    const tax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + tax;
   
    return (
        <div className='cart'>
            <h2>Cart Summary :</h2>
            <hr/>
               <p>Selected items : {quantity}</p>
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



  