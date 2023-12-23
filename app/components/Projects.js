import React from 'react'
import ProjectScreen from './ProjectScreen'

const Projects = () => {
  return (
    <div className='bg-zinc-950 overflow-hidden py-32'>
        <h1 className='relative z-30 text-center text-6xl '> Featured Projects</h1>
        <div className='relative z-50 grid grid-cols-2 mx-28 justify-items-center mt-32'>
        <ProjectScreen/>
        <ProjectScreen/>
        </div>
        <div className="lg:w-[100vw]  w-[150vw] h-[80vw] lg:h-[80vw] overflow-hidden bg-gradient-radial from-[#48c9af] opacity-30 backdrop-brightness-50 blur-3xl rounded-full top-[-150vh] left-[0vw] z-10 relative"></div>
    
    </div>
  )
}

export default Projects