import React from 'react'
import './Skill.css';
import UIDesign from '../assets/ui-design.png';
import WebDesign from '../assets/website-design.png';
import AppDesign from '../assets/app-design.png';
function Skill() {
    return (
        <section id="skills">
            <span className='title'> What I do</span>
            <span className='description'>
                I am skilled and passionate wed designer with experience  in creating visual appealing and user friendly websites.
                I have strong understanding  of design and keen eye for detail.
                I am proficient in html,css, and javascript as well as design software such as adobe photoshop and illustrator
            </span>
            <div className='skillbars'>
                <div className='skillbar'>
                    <img src={UIDesign} alt='notfound' className='skillbarimg' />
                    <div className='skillbartext'>
                        <h2>UI/UX</h2>
                        <p>I am interested in creating user interface design</p>
                    </div>
                </div>

                <div className='skillbar'>
                    <img src={WebDesign} alt='notfound' className='skillbarimg' />
                    <div className='skillbartext'>
                        <h2>Website-Design</h2>
                        <p>I have learn languages such as html/css/javascript as well as React-js</p>
                    </div>
                </div>

                <div className='skillbar'>
                    <img src={AppDesign} alt='notfound' className='skillbarimg' />
                    <div className='skillbartext'>
                        <h2>App-Design</h2>
                        <p>I also belive to start creating app</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill