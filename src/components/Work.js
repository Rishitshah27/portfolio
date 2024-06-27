import React from 'react';
import './Work.css';
import portfolio1 from '../assets/portfolio-1.png'
import portfolio2 from '../assets/portfolio-2.png'
import portfolio3 from '../assets/portfolio-3.png'
import portfolio4 from '../assets/portfolio-4.png'
import portfolio5 from '../assets/portfolio-5.png'
import portfolio6 from '../assets/portfolio-6.png'

function Work() {
  return (
    <section id='works'>
<h2 className='title'>My-Portfolio</h2>
<span className='workdesc'>I take pride in paying attention to smallest details and making sure that my work is pixel perfect
I am excited to bring my skills and experience to help businesses achieve their goals and create strong online presence</span>
<div className='workimgs'>
    <img src={portfolio1} className='workimg'  alt="notfound "/>
    <img src={portfolio2} className='workimg'  alt="notfound"/>
    <img src={portfolio3} className='workimg'  alt="notfound "/>
    <img src={portfolio4} className='workimg'  alt="notfound "/>
    <img src={portfolio5} className='workimg'  alt="notfound "/>
    <img src={portfolio6} className='workimg'  alt="notfound "/>
</div>
<button className='workbtn'>See More</button>
    </section>
  )
}

export default Work