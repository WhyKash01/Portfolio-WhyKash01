import React from 'react'
import Link from 'next/link'
import './Hamburger.css'
const Hamburger = () => {
  return (
    <div>
        <input  id="toggle" type="checkbox" />
        <label for="toggle" className="hamburger">
  <div className="top-bun"></div>
  <div className="meat"></div>
  <div className="bottom-bun"></div>
</label>
<div className="nav bg-gradient-to-t from-[#041616b2] to-[#041616] ">
  <div className="nav-wrapper">
    <nav className=''>
      <Link for="toggle" className='text' href="#HeroPage">HOME</Link><br/>
      <Link for="toggle" className='text' href="#Skill">Skill</Link><br/>
      <Link for="toggle" className='text' href="#Project">Project</Link><br/>
      <Link for="toggle" className='text' href="#Contact">Contact</Link>
    </nav>
  </div>
</div>
    </div>
  )
}

export default Hamburger