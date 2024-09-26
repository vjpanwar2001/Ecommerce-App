import React, { createContext, useState } from 'react'
const MyContext = createContext();
export default function MainContext({ children }) {
  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);

  // console.log(cart)
  function calculateAmount(cartItems) {
    console.log(cartItems)
    let calcTotal = cartItems.reduce((acc, item) => {
      return acc + (item.saleprice * item.quantity)
    }, 0)
    setTotal(calcTotal);

  }

  function deleteCartData(id) {
    let allData = JSON.parse(localStorage.getItem('cartData')) || [];

    var UpdateData = allData.filter((value, index) => index !== id)

    localStorage.setItem('cartData', JSON.stringify(UpdateData));
    setCart(UpdateData);
    calculateAmount(UpdateData)
  }

  function plusQuantity(index, incQnt) {
    let updatedCart = [...cart];

    updatedCart = updatedCart.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          quantity: incQnt // Increment the quantity
        };
      }
      return product;
    });

    localStorage.setItem('cartData', JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateAmount(updatedCart)
  }

  function minusQuantity(index, incQnt) {
    let updatedCart = [...cart];

    updatedCart = updatedCart.map((product, i) => {
      if (i === index) {

        let newQty = product.quantity ;
        if (newQty <=0) newQty = 1;
        // if (newQty > MAX_QTY) newQty = MAX_QTY;
        return {
          ...product,
          quantity: newQty // Increment the quantity
        };
      }
      return product;
    });

    localStorage.setItem('cartData', JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateAmount(updatedCart)
  }


  return (
    <MyContext.Provider value={{ cart, setCart, deleteCartData, calculateAmount, total, setTotal, plusQuantity , minusQuantity }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext };
