import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5"
import { GiBurningRoundShot, GiCutDiamond } from "react-icons/gi"
import { AiOutlineRise, AiOutlineEllipsis } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { MdFavoriteBorder } from "react-icons/md"
import High from "../../Assets/high.jpg"
import Male from "../../Assets/Male.jpg"
import silva from "../../Assets/silva.jpg"
import white from "../../Assets/white.jpg"

export const Dashboard = () => {
    return (
        <section className='w-20 md:w-60  shadow-xl bg-[#131412d4]'>
            <div className='flex flex-col p-1  md:p-3'>
                <div className='uppercase flex items-center gap-2 text-2xl font-bold'>
                    <IoGameControllerOutline />
                    <h1 className='hidden md:block'>Game land</h1>

                </div>
                {/* ---------------------------------------------------------- */}
                <div className='flex flex-col w-full justify-center h-80 space-y-6 border-none md:border-b border-gray-400 cursor-pointer'>
                    <div className='flex items-center gap-3 text-xl hover:border-l-2 border-[#882BEE] duration-75'>
                        <GiBurningRoundShot />
                        <h2 className='hidden md:block'>Hot</h2>
                    </div>
                    <div className='flex items-center gap-3 text-xl hover:border-l-2 border-[#882BEE] duration-75'>
                        <GiCutDiamond />
                        <h2 className='hidden md:block'>Now</h2>
                    </div>
                    <div className='flex items-center gap-3 text-xl hover:border-l-2 border-[#882BEE] duration-75'>
                        <AiOutlineRise />
                        <h2 className='hidden md:block'>Rising</h2>
                    </div>
                    <div className='flex items-center gap-3 text-xl hover:border-l-2 border-[#882BEE] duration-75'>
                        <CgProfile />
                        <h2 className='hidden md:block'>Profile</h2>
                    </div>
                    <div className='flex items-center gap-3 text-xl hover:border-l-2 border-[#882BEE] duration-75'>
                        <MdFavoriteBorder />
                        <h2 className='hidden md:block'>Favorite</h2>
                    </div>
                </div>
                <div className='flex flex-col md:items-center space-y-5  '>
                    {/* Streamers */}
                    <div className='flex items-center text-gray-300 text-xs justify-between w-16 md:w-56 mt-1'>
                        <h3 className='uppercase '>Top streamers </h3>
                        <AiOutlineEllipsis className='hidden md:block' />
                    </div>
                    {/* Profile */}
                    <div className='flex flex-col md:flex-row gap-3 md:justify-between md:items-center  w-56'>
                        <div className='w-5 h-5 md:w-10 md:h-10 mt-2'>
                            <img src={High} alt="imghigh" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='w-5 h-5 md:w-10 md:h-10 mt-2'>
                            <img src={Male} alt="imghigh" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='w-5 h-5 md:w-10 md:h-10 mt-2'>
                            <img src={white} alt="imghigh" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='w-5 h-5 md:w-10 md:h-10 mt-2'>
                            <img src={silva} alt="imghigh" className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                    <div className='hidden md:block w-44 bg-slate-700 text-white text-center mt-2 rounded-full py-2 hover:translate-y-2 duration-500 '>
                        <button>More</button>
                    </div>
                </div>
                {/* ----------------------------------------------------------- */}
                <div className='flex flex-col md:items-center space-y-4 border-none md:border-t border-gray-400 mt-3'>
                    <div className='flex justify-between items-center w-32 md:w-56 mt-2'>
                        <h3>Activity</h3>
                        <AiOutlineEllipsis className='hidden md:block' />
                    </div>
                    <h1 className='w-full text-xs md:text-xl'>Top 3 Tactics in Fortnite</h1>
                    <div className='flex flex-col md:flex-row gap-5 md:items-center'>
                        <button className='w-24 bg-[#882BEE] text-white text-center mt-2 rounded-full py-2 hidden md:block hover:translate-y-2 duration-500'>Game</button>
                        <button className='w-24 bg-[#882BEE] text-white text-center mt-2 rounded-full py-2 hidden md:block hover:translate-y-2 duration-500'>English</button>
                    </div>
                </div>
                {/* ----------------------------------------------------- */}
                <div className='mt-5 border-none md:border-t border-gray-400'>
                    <div className='mt-2 flex flex-col '>
                        <p className='text-xs md:text-xl'>New add to Newsletter March of The Lich King...</p>
                        <button className='w-24 bg-[#882BEE] text-white text-center mt-2 rounded-full py-2 hidden md:block hover:translate-y-2 duration-500'>Game</button>

                    </div>
                </div>
            </div>
        </section>
    )
}
