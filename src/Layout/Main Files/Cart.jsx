import React, { useContext, useEffect } from 'react'
import Header from '../Common Files/Header'
import Footer from '../Common Files/Footer'
import aboutimg from '../../img/Rectangle 1.png'
import { MyContext } from '../Context/MainContext'

function Cart() {
    let {cart , setCart} = useContext(MyContext)
    useEffect(()=>{
      let getCartData = JSON.parse(localStorage.getItem('cartData')) || [];
      setCart(getCartData);
    },[])

    
  return (
    <>
      <Header />
      <div className='w-full h-[200px] flex flex-col justify-center items-center ' style={{ backgroundImage: `url('${aboutimg}')` }}>
        <h1 className='text-[48px] font-[500]'>Cart</h1>
        <div className='font-[500]'>
          <span>Home <span>></span> Cart</span>
        </div>
      </div>

      <div className='w-full py-[40px] '>
        <div className='max-w-[1170px] m-auto py-4 flex grid grid-cols-[65%_auto] gap-[20px] align-top'>
          <div className=' '>
            <table className='w-full'>
              <tr className='bg-[#F9F1E7]  h-[40px] '>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
             {
              cart ?
                cart.map((v)=>{
                  return(
                    <tr align="center" className='mt-5  h-[110px]'>
                    <td>
                      <img src={v.pimg} width={100} alt="" />
                    </td>
                    <td>
                      {v.phead}
                    </td>
                    <td>{v.saleprice}</td>
                    <td><input type="number" min={1} max={10} value={1} /></td>
                    <td>{v.saleprice}</td>
                  </tr>
                  )
                })
              
                  :
                  <tr>
                    <td colspan="5" align="center">Cart Data is Empty</td>
                  </tr>
} 

            </table>
          </div>
          <div className=' bg-[#F9F1E7] py-4'>
            <h2 className='text-[30px] text-center font-bold'>Cart Totals</h2>
            <ul className='text-center py-3 flex flex-col gap-[10px]'>
              <li>Subtotal : Rs. 250,000.00</li>
              <li>Total : Rs. 250,000.00</li>

            </ul>
            <div className="text-center">

              <button className='px-8 py-2 my-4 border border-black rounded-lg font-bold'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart