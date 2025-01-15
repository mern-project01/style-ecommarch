import React from 'react';

const Cart = ({ cartProduct,handleClear }) => {
  // console.log(cartProduct)
  let total = 0;
  let quantity = 0;
  let txt = 0;
  let Shipping = 0;
  
  
  for (const product of cartProduct) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    Shipping += product.shipping;
    total = total + Shipping +txt;
  }
  txt = Math.round(total * 0.03);

 
    return (
      <div>
        <div className="text-white p-6 leading-6">
          <h1 className="text-3xl">Selected Items:{cartProduct.length} </h1>
          <h1 className="text-3xl">Selected Quantity:{quantity} </h1>
          <h1 className="text-2xl">Shipping Charge:{Shipping} </h1>
          {/* <h1 className="text-xl">Price:${price}</h1> */}
          <h1 className="text-xl">tax:$ { txt} </h1>
          <h1 className="text-2xl">Total Price:${total }</h1>
          <div className="text-xl pt-2 flex gap-8">
            <button onClick={handleClear} className="btn btn-secondary">Clear Cart</button>
            <button className="btn btn-accent">Process Order</button>
          </div>
        </div>
      </div>
    );
};

export default Cart;