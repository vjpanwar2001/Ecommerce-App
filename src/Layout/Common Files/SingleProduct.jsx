import React, { useContext } from 'react'
import Header from './Header'
import {useParams } from 'react-router'
import Footer from './Footer';
import { products } from './Browse';
import  { MyContext } from '../Context/MainContext';
import { Link } from 'react-router-dom';
function SingleProduct() {
  
    let {shopname} = useParams();

    let { setCart ,setShopId , addToCart , shopId , singlepro} = useContext(MyContext);
    setShopId(shopname)
    
    
  return (
      <>
      <Header/>
      <div className='bg-[#F9F1E7] py-4 px-[100px] flex justify-between'>
        <div className='flex gap-[20px] w-[45%] items-center'>
          <div className='flex items-center gap-[10px]'>
          <h4 className='font-[500]'>Home | Shop  | {shopId}</h4>
          </div>
        </div>

      </div>
      {
        singlepro && 
        <div className='max-w-[1000px] m-auto flex justify-center my-14 gap-[50px]'>
        <div className='bg-[#F9F1E7] w-[350px] h-[400px] flex justify-center items-center'>
            <img src={singlepro.pimg} alt="" />
        </div>
        <div className='w-[50%]'>
            <h1 className='text-[42px] '>{singlepro.phead}</h1>
            <p className='font-[500] text-[20px] text-[#9F9F9F]'>Rs {singlepro.saleprice}</p>
            <p className='text-[13px] py-2'>{singlepro.des}
            </p>
            <div className='flex py-4 gap-4'>
                <input type="number" className='border px-2 py-2 rounded-md' value={singlepro.quantity} min="1" max="10"  />
               <Link to={"/cart"}><button onClick={addToCart} className='border border-black px-5 rounded-md'>Add To Cart</button></Link>
           </div>     
        </div>
  </div>
      }
      <Footer/>
    </>
  )
}

export default SingleProduct