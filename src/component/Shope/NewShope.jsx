import React, { useState } from "react";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";

const NewShope = () => {
  const [cart, setCart] = useState([])

  const handleBuy = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(Product => Product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
      // console.log("its from if" +  newCart);
      
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      // selectedProduct.quantity = selectedProduct.quantity + 1;
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
      // console.log("its from else" , rest);
      
    }
    setCart(newCart)
    // console.log("its from last" + newCart);

  }

  const handleClear = () => {
     setCart([])
   };
  // console.log(cart)
  return (
    <div className="flex justify-between mx-2">
      <div className="w-[70%] bg-slate-500">
        <Product handleBuy={handleBuy}></Product>
      </div>

      <div className="w-[29%] h-72 bg-black fixed right-1 ">
        <Cart cartProduct={cart} handleClear={handleClear}></Cart>
      </div>
    </div>
  );
};

export default NewShope;
