import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll';
import img from '../assets/hireme.png';
function Intro() {
  return (
    <section id="Intro">
      <div className='IntroContent'>
    <span  className='hello'>Hello,</span>
    <span className='IntroText'>I'm <span className='IntroName'>Rishit</span><br/> Website Developer</span>
    <p className='IntroPara'>
  I am Skilled Wed designer with experience <br/> in creating  visual appealing and user friendly websites</p>
  <Link> <button className='btn'> <img src={img} alt="hire me" className='btnImage'/> Hire-Me</button></Link>
      </div>
      <p>Frontend-Developer</p>
    </section>
  )
}

export default Intro