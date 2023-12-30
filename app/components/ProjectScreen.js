import React from 'react'
import Image from 'next/image'
import linkImag from './../../public/link2.png'
import game1 from './../../public/game1.png'
import game3 from './../../public/Game.png'
import game2 from './../../public/Game2.png'
import game4 from './../../public/Game3.png'
import Portfolio1 from './../../public/Portfolio1.png'
import Portfolio3 from './../../public/Portfolio2.png'
import Portfolio2 from './../../public/portfolio5.png'
import Portfolio4 from './../../public/Portfolio6.png'
const ProjectScreen = (props) => {
    const i=parseInt(props.i);

    const object=[{
        src1: game1,
        src2: game2,
        src3: game3,
        src4: game4
    },
    {
        src1: Portfolio1,
        src2: Portfolio2,
        src3: Portfolio3,
        src4: Portfolio4
    }]
  return (
    <div className=' lg:rounded-xl rounded-lg border z-50 border-zinc-600 bg-black xl:w-[40vw] w-[90vw]'>
        <div className='flex gap-1 lg:gap-2 lg:mt-3 mt-2 ml-3'>
            <div className='w-2 h-2 lg:w-4 lg:h-4 bg-rose-600 rounded-full'></div>
            <div className='w-2 h-2 lg:w-4 lg:h-4 bg-yellow-500 rounded-full'></div>
            <div className='w-2 h-2 lg:w-4 lg:h-4 bg-green-500 rounded-full'></div>
            
        </div>
        <div className='lg:rounded-t-xl rounded-t-lg  overflow-hidden lg:mx-2 mx-1 bord lg:mt-2 mt-1 bg-zinc-800 border border-zinc-600 2xl:h-[19vw]'>
        <div className=' grid grid-cols-2  lg:gap-2 gap-1 lg:m-2 m-1'>
        <Image className='rounded-md' src={object[i].src1}></Image>
        <Image className='rounded-md' src={object[i].src2}></Image>
        <Image className='rounded-md' src={object[i].src3} ></Image>
        <Image className='rounded-md' src={object[i].src4}></Image>
        </div>
        </div>
        <div className='flex lg:h-2 h-1 bg-zinc-900 lg:mx-2 mx-1'>
            <div className='bg-yellow-400 w-[33%] h-full'></div>
            <div className='bg-zinc-700 w-[20%] h-full'>
               
            </div>
        </div>
        <div className='lg:mx-10 mx-5 flex justify-between lg:my-5 my-2'>
            <div>
            <h3 className='xl:text-2xl lg:text-3xl text-lg '>Gamers Galaxy</h3>
            <h3 className='xl:text-lg lg:text-xl text-xs font-[400] '>E-commerce Wedsite made with Next Js</h3>
            </div>
            <div className='my-auto '>
                <Image src={linkImag} className='xl:w-7 xl:h-7 w-4 h-4'></Image>
            </div>
        </div>
    </div>
  )

}

export default ProjectScreen