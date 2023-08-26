import React from 'react'
import { AiFillStar, AiFillTrophy, AiOutlineEllipsis } from 'react-icons/ai'
export const Seller = () => {
    return (
        <section className='mt-5'>
            <div className='flex-col lg:flex-row items-center flex w-full gap-5'>
                {/* -----------------left------------- */}
                <div className='w-60 md:w-72 bg-[#080808] rounded-3xl flex flex-col py-5 px-3'>
                    <div className='flex justify-between   items-center '>
                        <div className='flex items-center gap-3'>
                            <div className='bg-[#2e2e2d9e] rounded-full border p-2 hover:translate-y-2 duration-500 border-black text-3xl'>
                                <AiFillStar className='text-[#FAAB0F]' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2>John Doe</h2>
                                <button className='w-20 bg-[#4e4444] rounded-full hover:translate-y-2 duration-500'>Buy</button>
                            </div>
                        </div>
                        <AiOutlineEllipsis />
                    </div>
                    <div className='mt-5 flex flex-col justify-center '>
                        <div className='ml-20 bg-[#2e2e2d9e] w-14 h-14 border-2 p-2 border-[#1F8E65] hover:translate-y-2 duration-500  rounded-full '>
                            <AiFillTrophy className='w-full h-full text-[#FAAB0F] rotate-45' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <span>1500</span>
                                <span>9000</span>
                            </div>
                            <input type="range" name="" id="" />
                        </div>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <h4 className='text-gray-500'>Current <span className='text-white'>  Bronze</span> </h4>
                        <h4 className='text-gray-500'>Next <span className='text-white'> Bronze</span></h4>
                    </div>
                </div>
                {/* -------------------------Right-------------------------- */}
                <div className='bg-[#080808] w-60 md:w-72 rounded-3xl'>
                    <div className='mt-5 px-3'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-green-600 h-2 w-2 rounded-full'></div>
                            <h1>Total Profils</h1>
                        </div>
                    </div>
                    <div className='bg-[#222121] shadow-2xl mt-5 mx-auto w-auto md:w-64 py-5 rounded-2xl relative mb-5'>
                        <div className='px-5 flex justify-between'>
                            <div className=' flex flex-col'>
                            <p>2235</p>
                            <h5>Bettings</h5>
                            </div>
                            <div className=' flex flex-col '>
                            <p>123</p>
                            <h5>Winning</h5>
                            </div>
                            <div className=' flex flex-col'>
                            <p>223</p>
                            <h5>Loses</h5>
                            </div>
                        </div>
                        <div className='bg-yellow-600 text-center mt-8 mx-auto py-2 rounded-full w-36 hover:translate-y-2 duration-500'>
                            <button>Placet Bet</button>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className='bg-[#080808] w-60 md:w-72 rounded-3xl'>
                    <div className='mt-5 px-3'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-green-600 h-2 w-2 rounded-full'></div>
                            <h1>Total Profils</h1>
                        </div>
                    </div>
                    <div className='bg-[#222121] shadow-2xl mt-5 mx-auto w-auto md:w-64 py-5 rounded-2xl mb-5 relative'>
                    
                        <div className='px-5 flex justify-between'>
                            <div className=' flex flex-col'>
                            <p>2235</p>
                            <h5>Bettings</h5>
                            </div>
                            <div className=' flex flex-col '>
                            <p>123</p>
                            <h5>Winning</h5>
                            </div>
                            <div className=' flex flex-col'>
                            <p>223</p>
                            <h5>Loses</h5>
                            </div>
                        </div>
                        <div className='bg-yellow-600 text-center mt-8 mx-auto py-2 rounded-full w-36 hover:translate-y-2 duration-500'>
                            <button>Placet Bet</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
