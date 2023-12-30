import React from 'react'
import ProjectScreen from './ProjectScreen'

const Projects = () => {
  return (
    <div id='Project' className='bg-zinc-950 w-[100%] overflow-hidden xl:py-24 py-[8vh] md:h-[110vh] lg:h-[105vh] sm:h-[100vh]'>
        <h2 className='relative z-30 text-center 2xl:text-xl lg:text-3xl md:text-xl text-sm font-[400]' >Explore</h2>
        <h1 className='relative z-30 text-center 2xl:text-5xl lg:text-6xl md:text-5xl text-3xl xl:mt-2 lg:mt-5 mt-1'>Featured Projects</h1>
        <div className='relative z-50 grid xl:grid-cols-2 gap-5 grid-rows-2 2xl:mx-14 mx-5 justify-items-center 2xl:mt-14 lg:mt-12 mt-5'>
        <ProjectScreen i={"0"}/>
        <ProjectScreen i={"1"}/>
        </div>
        <div className="lg:w-[100vw]  w-[150vw] h-[80vw] lg:h-[80vw] overflow-hidden bg-gradient-radial from-[#48c9af] opacity-30 backdrop-brightness-50 blur-3xl rounded-full xl:top-[-150vh] xl:left-[0vw] md:top-[-100vh] top-[-50vh] left-[-10vw] z-10 relative"></div>
        
    </div>
  )
}

export default Projects