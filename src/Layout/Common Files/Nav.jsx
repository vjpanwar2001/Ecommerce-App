import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import cart1 from '../../img/Vector (1).svg'
import xcross from '../../img/xcross.svg'
import { MyContext } from '../Context/MainContext';
function Nav() {

      let [modal , setModal] = useState(false);
      let {cart , deleteCartData , plusQuantity , minusQuantity} = useContext(MyContext);



  return (
    <>
        

<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <h5 className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black'>Ecommerce</h5>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li>
          <Link to="/" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
       
        <li>
          <Link to="/shop" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Shop</Link>
        </li>
    
        <li>
          <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>
    </div>
    <div className='relative'>
           <button onClick={()=>setModal(!modal)}><img src={cart1} width={20}/></button> 
           <span className='absolute text-red-600 font-bold right-[-11px] top-[33%]  translate-y-[-50%]'>
            {cart && cart.length > 0 ? cart.length : 0}
           </span>
    </div>
  </div>    
</nav>
  
    <div className={`w-[350px] pt-[10px]    bg-[#B88E2F] absolute duration-[1s]  top-0 ${modal==true ? 'right-0':'right-[-30%]'}`}>
      <div className='flex items-center justify-between px-[10px]'>
      <h1 className=' text-[20px]  text-white font-bold'>Shopping Cart</h1>
      <span className='float-right text-white text-[30px] cursor-pointer mr-4' onClick={()=>setModal(false)}>&times;</span>
      </div>
     
      <div className=' bg-black h-[81vh] overflow-y-scroll   pt-5  px-5  mt-6 flex flex-col  customscrollbar'>
        {
          cart && cart.length>0 ?
          cart.map((v,i)=>{
            return(
              <div className='flex gap-[20px] mb-5 items-center justify-around text-white   '>
          <div className='w-[100px] h-[100px] rounded-md overflow-hidden '>
            <img className='w-full h-full object-cover ' src={v.pimg} alt="" />
          </div>
          <div> 
            <h1 className='font-[arial] text-[18px] font-bold'>{v.phead}</h1>
            <div className='flex flex-col text-black font-[arial] '>
            <span className='text-[18px] text-[#B88E2F]'>Rs {v.saleprice}</span>

              <div>
              <button className='bg-black text-white w-[30px] h-[30px]' onClick={()=>plusQuantity(i,++v.quantity)}>+</button>
                          <input  type="number" className='mx-4 w-[40px]' value={v.quantity}/>
                          <button className='bg-black text-white w-[30px] h-[30px]' onClick={()=>minusQuantity(i,--v.quantity)}>-</button>
              </div>
            
            </div>
          </div>
          <div className=''  onClick={() => deleteCartData(i)}>
              <img src={xcross} alt="" />
          </div>
        </div>  
            )
          }) :
          <h1 className='w-full text-center text-white  h-[80vh] leading-[80vh] align-middle'>Cart Is Empty</h1>
          
        }
          
      </div>
      <div className='flex items-center justify-center bg-black gap-2 pt-5 pb-5 text-white'>
              <Link to={'/cart'}><button className='border border-white text-[13px] font-[500] font-[arial] px-8 rounded-full py-1'>Cart</button></Link>
              <button className='border border-white text-[13px] font-[500] font-[arial] px-8 rounded-full py-1'>Checkout</button>
          </div>
    </div>
    </>
  )
}

export default Nav