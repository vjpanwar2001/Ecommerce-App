import React, { createContext, useState } from 'react'
import { useParams } from 'react-router';
import { products } from '../Common Files/Browse';


const MyContext = createContext();
export default function MainContext({ children }) {
  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);
  let [shopId , setShopId] =  useState('');  

      const singlepro = products?.filter((a)=>a.phead==shopId)[0]
      
      function addToCart(){
        let setItem = JSON.parse(localStorage.getItem('cartData')) || [];
    
        let updateData  = [...setItem,singlepro];
    
        setCart(localStorage.setItem('cartData',JSON.stringify(updateData)));
        
      }
      function multiAddToCart(v){
        let allcartdata = JSON.parse(localStorage.getItem('cartData')) || [];
        let multidata = [...allcartdata,v]
        localStorage.setItem('cartData',JSON.stringify(multidata))
        setCart(multidata )
      }
  function calculateAmount(cartItems) {
    
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
    <MyContext.Provider value={{ cart, setCart, deleteCartData, calculateAmount, total, setTotal, plusQuantity , minusQuantity  ,setShopId , addToCart,multiAddToCart , shopId , singlepro}}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext };
