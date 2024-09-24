import React, { createContext, useState } from 'react'
const MyContext = createContext();
export default function MainContext({children}) {
    let [cart , setCart] = useState([]);
    console.log(cart)
  return (
    <MyContext.Provider value={{cart , setCart}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext};
