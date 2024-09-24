import React, { createContext, useState } from 'react'
const MyContext = createContext();
export default function MainContext({children}) {
    let [cart , setCart] = useState([]);
    let [total , setTotal] = useState(0);

    // console.log(cart)
    function calculateAmount (cartItems){

      let calcTotal = cartItems.reduce((acc , item )=>{
        return acc + item.saleprice 
      },0)
      setTotal(calcTotal);
    }

    function deleteCartData(id) {
      let allData = JSON.parse(localStorage.getItem('cartData')) || [];
  
      var UpdateData = allData.filter((value, index) => index !== id)
  
      localStorage.setItem('cartData', JSON.stringify(UpdateData));
      setCart(UpdateData);
      calculateAmount(UpdateData)
    }
  return (
    <MyContext.Provider value={{cart , setCart , deleteCartData , calculateAmount , total , setTotal}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext};
