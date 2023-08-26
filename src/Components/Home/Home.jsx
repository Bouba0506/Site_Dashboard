import React from 'react'
import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai'

export const Home = () => {
  return (
    <section className='home w-[90%] lg:w-[70%] relative mt-1 rounded-3xl'>
      <div className='flex mt-5 flex-col px-3'>
        <div className='flex items-center gap-3'>
          <button className='bg-[#a2a3a245] w-24 rounded-full py-2 uppercase hover:translate-y-2 duration-500'>Publier</button>
          <AiOutlineApple className='w-8 h-8 rounded-full text-center bg-[#9f7d7dfc] hover:translate-y-2 duration-500' />
          <AiOutlineWindows className='w-8 h-8 rounded-full text-center bg-[#9f7d7dfc] hover:translate-y-2 duration-500' />

        </div>
      </div>
      <div className='absolute bottom-14 flex flex-col items-center left-7 md:left-14 lg:left-60 gap-4'>
        <button className='bg-[#a2a3a245] w-24 rounded-full py-2 uppercase hover:translate-y-2 duration-500'>Publier</button>
        <h1 className='uppercase text-3xl tracking-widest'>Overwatch</h1>
      </div>
    </section>
  )
}
