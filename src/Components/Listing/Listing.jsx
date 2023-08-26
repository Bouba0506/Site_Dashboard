import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const Listing = () => {
  return (
    <section className='hidden lg:flex flex-col items-center space-y-14 mt-2 pr-2 '>
        <div className='bg-[#261D03] rounded-3xl text-center items-center justify-center py-8  h-44'>
            <h1 className='text-2xl'>Create a Tournament ?</h1>
            <p className='text-xl'>create if you are a <span className='text-[#FAD15C]'>Premium account</span></p>
        </div>
        <div className='mt-3 flex flex-col justify-center bg-[#261D03] rounded-3xl w-72 px-2 h-44'>
          <h1 className='mt-5'>Balance</h1>
          <div className='flex items-center justify-center h-[35px] mt-1 p-1 rounded-lg text-black bg-slate-300'>
            <input type="text" placeholder='0.00000' id='tex' className=''/>
            <AiOutlinePlus/>
          </div>
          <div className='bg-[#a2a3a245] w-24 flex flex-col ml-20 my-3 rounded-full py-2 uppercase hover:translate-y-2 duration-500'>
          <button >Deposit</button>

          </div>

        </div>
    </section>
  )
}
