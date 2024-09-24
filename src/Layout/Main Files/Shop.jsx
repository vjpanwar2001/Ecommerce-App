import React from 'react'
import Header from '../Common Files/Header'
import aboutimg from '../../img/Rectangle 1.png'
import icon1 from '../../img/system-uicons_filtering.svg'
import icon2 from '../../img/bi_view-list.svg'
import icon3 from '../../img/ci_grid-big-round.svg'
import { products } from '../Common Files/Browse'
import Footer from '../Common Files/Footer'
import { Link } from 'react-router-dom'
function Shop() {
  return (
    <>
    <Header/>
    <div className='w-full h-[316px] flex flex-col justify-center items-center ' style={{backgroundImage:`url('${aboutimg}')`}}>
          <h1 className='text-[48px] font-[500]'>Shop</h1>
          <div className='font-[500]'>
            <span>Home <span>></span> Shop</span>
          </div>
      </div>
      <div className='bg-[#F9F1E7] py-4 px-[100px] flex justify-between'>
        <div className='flex gap-[20px] w-[45%] items-center'>
          <div className='flex items-center gap-[10px]'>
          <img src={icon1}/>
          <h4 className='font-[500]'>Filter</h4>
          </div>
        
        <img src={icon3} alt="" /> 
        <img src={icon2} alt="" /> |
        <h4 className='font-[500]'>Showing 1-16 of 32 result</h4>
        </div>
        <div className='flex justify-end gap-[20px] w-[45%]'>
          <div className='flex items-center gap-[10px]'>
          <h4 className='font-[500]'>Show</h4>
          <input type="number" placeholder='16' className='w-[80px] px-4 py-2'/>
          </div>
          <div className='flex items-center gap-[10px]'>
          <h4 className='font-[500]'>Short By</h4>
          <select name="" id="" className='px-4 py-2'>
            <option value="">Default</option>
          </select>
          </div>
        </div>

      </div>
      <div className='py-[50px] '>
          <div className='max-w-[1170px] m-auto gap-[20px] grid grid-cols-4'>
            {
              products.map((v)=>{
                return(
                  <div className=''>
                  <Link to={`/shop/${v.phead}`}>
                  <img src={v.pimg} alt="" />
                  </Link>
                  <div className='w-full bg-[#F4F5F7] p-3 font-arial'>
                    <h1 className='font-bold text-[24px] text-[#3A3A3A]'>{v.phead}</h1>
                    <p className='text-[#898989] text-[16px] font-[600]'>{v.des}</p>
                    <div className='flex items-center gap-3 '>
                      <p className='font-bold text-[20px]'>Rs {v.saleprice}</p>
                      <p className='text-[#B0B0B0] text-[16px] line-through'>{v.regularprice}</p>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
      </div>
      <Footer/>
  </>
  )
}

export default Shop