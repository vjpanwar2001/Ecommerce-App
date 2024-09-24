import React, { createContext } from 'react'

const MainContext = createContext();
export default function CartContext({children}) {
  return (
    <MainContext.Provider >
        {children}
    </MainContext.Provider>
  )
}


export {MainContext}