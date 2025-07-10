import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../../assets2/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
const [currState,setCurrState]=useState('sign up')

  return (
    <div className='login-popup'>
        <form className='login-popup-container' action="">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
<div className="login-popup-input">
    {currState==="log in"?<></>:  <input type="text"placeholder='your name' required/>}
   
    <input type="email" placeholder='your email' required/>
    <input type="password" placeholder='password' required />
</div>
<button>{currState==="sign up"?"Create account":"log in"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required/>
    <p>By continuing, i agree to the terms of use & privacy policy</p>
</div>
{currState==='log in'?
<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click Here</span></p>
:<p>Already have an account <span onClick={()=>setCurrState("log in")}>Login Here</span></p>}


        </form>
    </div>
  )
}

export default LoginPopup