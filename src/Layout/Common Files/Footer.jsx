import React from 'react'

function Footer() {
  return (
    <>
      <div className='border border-t-2 py-5'>

          <div className='max-w-[1170px] m-auto grid grid-cols-4 gap-3 py-5'>
              <div className=''>
                <h1 className='font-bold text-[24px]'>Ecommerce</h1>
                <ul className='mt-4'>
                  <li>400 University Drive Suite 200 Coral Gables,
                  </li>
                  <li>FL 33134 USA</li>
                </ul>
              </div>
              <div className=''>
                <h5 className=' text-[#9F9F9F] text-[16px]'>Links</h5>
                <ul className='mt-4 flex flex-col gap-5'>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className=''>
                <h5 className=' text-[#9F9F9F] text-[16px]'>Help</h5>
                <ul className='mt-4 flex flex-col gap-5'>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
              <div className=''>
                <h5 className=' text-[#9F9F9F] text-[16px]'>Newsletter</h5>
                <div className='flex gap-3 mt-4'>
                <input type="text" placeholder='Enter Your Email' className='border-b-[1px] border-black focus:outline-0'  />
                <button className='border-b-[1px] border-black font-[14px] text-black uppercase font-[500] '>Subscribe</button>
                </div>
              </div>
          </div>

      </div>
    </>
  )
}

export default Footer