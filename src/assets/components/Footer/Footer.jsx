import React from 'react'
import './Footer.css'
import {assets} from '../../../assets2/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
    <div className="footer-content">
<div className="footer-content-left">
    <img src='/public/Untitled.png' alt="" />
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Atque nemo soluta maxime corporis, minima ex? Neque totam quam 
    iste distinctio repellendus illo optio modi
     excepturi, harum dolorum et mollitia minus. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. 
     Hic quo, veritatis consectetur modi repellat sint ex! Et 
     ullam nulla exercitationem voluptatem nihil voluptas deserunt 
     repellat harum sequi, iusto mollitia porro.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>

</div>

<div className="footer-content-center">
    <h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delhivery</li>
    <li>Privacy policy</li>
</ul>

</div>


<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 9370488233</li>
    <li> chederavi44@gmail.com</li>
</ul>

</div>
    </div>
    <hr />
    <p className='footer-copyright'>
        Copyright 2024 © khana.com All Rights Reserved.
    </p>
    </div>
  )
}

export default Footer