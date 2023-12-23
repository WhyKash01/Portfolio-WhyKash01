import React from 'react'
import Image from 'next/image'
import linkImag from '../../public/link2.png'
import game1 from '../../public/Game1.png'
import game from '../../public/Game.png'
import game2 from '../../public/Game2.png'
import game3 from '../../public/Game3.png'
const ProjectScreen = () => {
  return (
    <div className=' rounded-xl border z-50 border-zinc-600 bg-black w-[40vw]'>
        <div className='flex gap-2 mt-3 ml-3'>
            <div className='w-4 h-4 bg-rose-600 rounded-full'></div>
            <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
            <div className='w-4 h-4 bg-green-500 rounded-full'></div>
            
        </div>
        <div className='rounded-t-xl  overflow-hidden mx-2 bord mt-2 bg-zinc-800 border border-zinc-600  h-[19vw]'>
        <div className=' grid grid-cols-2 gap-2 m-2'>
        <Image className='rounded-md' src={game1}></Image>
        <Image className='rounded-md' src={game2}></Image>
        <Image className='rounded-md' src={game} ></Image>
        <Image className='rounded-md' src={game3}></Image>
        </div>
        </div>
        <div className='flex h-2 bg-zinc-900 mx-2  '>
            <div className='bg-yellow-400 w-[33%] h-full'></div>
            <div className='bg-zinc-700 w-[20%] h-full'>
               
            </div>
        </div>
        <div className='mx-10 flex justify-between my-5'>
            <div>
            <h3 className='text-2xl '>Gamers Galaxy</h3>
            <h3 className='text-lg font-[400] '>E-commerce Wedsite made with Next Js</h3>
            </div>
            <div className='my-auto '>
                <Image src={linkImag} className='w-7 h-7'></Image>
            </div>
        </div>
    </div>
  )

}

export default ProjectScreen