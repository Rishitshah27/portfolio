import React from 'react'
import './Contact.css'
import walmart from '../assets/walmart.png'
import microsoft from '../assets/microsoft.png'
import adobe from '../assets/adobe.png'
import facebook from '../assets/facebook.png'
import face from '../assets/facebook-icon.png'
import  you from '../assets/youtube.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'

function Contact() {

  return (
   <section id="contactpage">
    <div id='client'>
<h1 className='contactpagetitle'>My-Clients</h1>
<p className='clientsdesc'>
    I had opportunity to work with diverse group of companiens some of notable companiens i have work includes
</p>
<div className='clientimgs'>
<img src={walmart} className='clientimg' alt="notfound"/>
<img src={adobe} className='clientimg' alt="notfound"/>
<img src={microsoft} className='clientimg' alt="notfound"/>
<img src={facebook} className='clientimg' alt="notfound"/>
</div>
    </div>
    <div id='contact'>
<h1 className='contactpagetitle'>Contact-Me</h1>
<span className='contactdesc'>Please fill out form below to discuss any opportunity</span>
<form className='contactform'>
<input type='text' placeholder='your name' className='name' name='your_name'/>
<input type='email' placeholder='your email' className='email' name='your_email'/>
<textarea name='message' rows='5' placeholder='your message' className='msg'></textarea>
<button className='submitbtn' type='submit' value='send'>Submit</button>
<div className='links'>
<img src={face} className='link' alt='notfound'/>
<img src={twitter} className='link' alt='notfound'/>
<img src={you} className='link' alt='notfound'/>
<img src={insta} className='link' alt='notfound'/>
</div>
</form>
    </div>
   </section>
  )
}

export default Contact