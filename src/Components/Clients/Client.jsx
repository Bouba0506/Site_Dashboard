import React from 'react'
import high from "../../Assets/high.jpg"
import Male from "../../Assets/Male.jpg"
import silva from "../../Assets/silva.jpg"
import white from "../../Assets/white.jpg"
export const Client = () => {
    return (
        <section className='w-[95%]  mt-5 bg-black p-5 shadow-2xl rounded-lg hidden md:block'>
            <div className='flex gap-3 items-center px-5 mb-4'>
            <div className='bg-green-600 h-2 w-2 rounded-full'></div>
            <h1 className='text-2xl'>My Best</h1>
            </div>
            <div className='w-full px-5 flex flex-col'>
                <div className='flex justify-between'>
                    {/* ----------------Users----------------- */}
                    <div className='flex flex-col gap-3'>
                        <h3>User</h3>
                        <div className=' flex items-center w-52  gap-2'>
                            <div className='w-10 h-10 '>
                                <img src={high} alt="" className='rounded-full w-full h-full object-cover' />
                            </div>
                            <h2 >Yen bock</h2>
                        </div>
                        <div className=' flex items-center w-52 gap-2'>
                            <div className='w-10 h-10 '>
                                <img src={silva} alt="" className='rounded-full w-full h-full object-cover' />
                            </div>
                            <h2> Michell vedovelli</h2>
                        </div>
                        <div className=' flex items-center w-52 gap-2'>
                            <div className='w-10 h-10 '>
                                <img src={white} alt="" className='rounded-full w-full h-full object-cover' />
                            </div>
                            <h2>Emma Macron</h2>
                        </div><div className=' flex items-center w-52 gap-2'>
                            <div className='w-10 h-10 '>
                                <img src={Male} alt="" className='rounded-full w-full h-full object-cover' />
                            </div>
                            <h2>Kevin Durant</h2>
                        </div>
                    </div>
                    {/* -------------Time----------------------- */}
                    <div className='flex flex-col gap-3 space-y-4'>
                        <h3>Time</h3>
                        <span>10.09</span>
                        <span>12.03</span>
                        <span>15.05</span>
                        <span>18.07</span>
                    </div>
                    {/* ------------------Game----------------- */}
                    <div className='flex flex-col gap-3 space-y-4'>
                        <h3>Game</h3>
                        <span>Clash</span>
                        <span>Pocket Camp</span>
                        <span>CapCom</span>
                        <span>Benza</span>
                    </div>
                      {/* -------------Profit----------------------- */}
                      <div className='flex flex-col gap-3 space-y-4'>
                        <h3>Time</h3>
                        <span className="text-green-500">+ 10.09</span>
                        <span className="text-green-500">+ 12.03</span>
                        <span className="text-green-500">+ 15.05</span>
                        <span className="text-green-500">+ 18.07</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
