import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart1 from '../../img/Vector (1).svg'
import xcross from '../../img/xcross.svg'
function Nav() {

      let [modal , setModal] = useState(false);


  return (
    <>
        

<nav className="bg-white border-gray-200">
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
    <div>
           <button onClick={()=>setModal(!modal)}><img src={cart1} width={20}/></button> 
    </div>
  </div>    
</nav>
    {modal && <div className={`w-[100%] h-[100vh]  absolute bg-[rgba(0,0,0,0.6)]`}></div>}
    <div className={`w-[350px] pt-[10px]    bg-[#B88E2F] absolute right-0 top-0 ${modal==true ? 'block':'hidden'}`}>
      <div className='flex items-center justify-between px-[10px]'>
      <h1 className=' text-[20px]  text-white font-bold'>Shopping Cart</h1>
      <span className='float-right text-white text-[30px] cursor-pointer mr-4' onClick={()=>setModal(false)}>&times;</span>
      </div>
     
      <div className='bg-white h-[300px] pt-5  px-5  mt-6 flex flex-col justify-between '>
          <div className='flex gap-[20px] mb-5 items-center justify-between   '>
            <div className='w-[100px] h-[100px] rounded-md overflow-hidden '>
              <img className='w-full h-full object-cover ' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" alt="" />
            </div>
            <div> 
              <h1 className='font-[arial] text-[18px] font-bold'>Product Name</h1>
              <div className='flex gap-[40px] font-[arial]'>
                <span className='text-[18px] '>1</span>
                <span className='text-[18px] text-[#B88E2F]'>Price</span>
              </div>
            </div>
            <div className=''>
                <img src={xcross} alt="" />
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 border-t-2 pt-5 border-black pb-5'>
              <Link to={'/cart'}><button className='border border-black text-[13px] font-[500] font-[arial] px-8 rounded-full py-1'>Cart</button></Link>
              <button className='border border-black text-[13px] font-[500] font-[arial] px-8 rounded-full py-1'>Checkout</button>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Nav