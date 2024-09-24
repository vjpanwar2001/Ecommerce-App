import React from 'react'
import Header from '../Common Files/Header'
import mainimg from '../../img/scandinavian-interior-mockup-wall-decal-background 1.jpg'
import { bdata, products } from '../Common Files/Browse'
import Footer from '../Common Files/Footer'

function Home() {
  return (
    <>
      <Header/>
      <div className='h-[90vh] bg-cover bg-center  w-full  pr-[50px] flex items-center justify-end ' style={{backgroundImage:`url('${mainimg}')`}}>
        <div className='w-[35%] p-[50px_30px] bg-[#FFF3E3] flex flex-col items-start   '>
          <h2 className='font-bold uppercase'>New Arrival</h2>
          <h1 className='font-bold text-4xl py-3 text-[#B88E2F]'>Discover Our <br/>New Collection </h1>
          <p className='text-[11px] font-bold pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='bg-[#B88E2F] text-white px-8 py-3 uppercase text-[10px] font-bold ' >Buy Now</button>
        </div>
      </div>
      <div className='bg-[#F5F5F5] py-[50px] '>
        <div className='text-center'> 
        <h2 className='font-bold text-[35px]'>Browser The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='max-w-[1170px] mt-[25px] grid gap-5  grid-cols-3  py-5 m-auto'>
          { 
            bdata.map(function(v){
              return(
                <>
                <div className='text-center '>
                <div className='h-[480px]  rounded-[10px] bg-cover bg-center' style={{backgroundImage:`url('${v.img}')`}}>

                </div>
                <h2 className='mt-3 text-[24px] font-bold '>{v.heading}</h2>
                </div>
                </>
              )
            })
          }
         
       
        </div>
        <div className='text-center'> 
        <h2 className='font-bold text-[35px]'>Our Products</h2>
        </div>
        <div className='max-w-[1170px] mt-[25px] grid gap-5  grid-cols-4  py-5 m-auto'>
          {
            products.map(function(v){
              return(
                <div className=''>
                <img src={v.pimg} alt="" />
                <div className='w-full bg-[#F4F5F7] p-3 font-arial'>
                  <h1 className='font-bold text-[24px] text-[#3A3A3A]'>{v.phead}</h1>
                  <p className='text-[#898989] text-[16px] font-[600]'>{v.des}</p>
                  <div className='flex items-center gap-3 '>
                    <p className='font-bold text-[20px]'>{v.saleprice}</p>
                    <p className='text-[#B0B0B0] text-[16px] line-through'>{v.regularprice}</p>
                  </div>
                </div>
              </div>
              )
            })
          }
       
          </div>
          <div className='w-[100%] text-center'>

<button className='w-[250px] py-2 border border-[#B88E2F] font-bold text-[#B88E2F]'>Show More</button>
</div>
      </div>
      
     <Footer/>
    </>
  )
}

export default Home