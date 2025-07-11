import React, { useContext, useState } from 'react'
import {assets} from '../../../assets2/frontend_assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'


import { StoreContext } from '../../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home")
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'>
 <img className='logo' width={100} src="/public/Untitled.png" alt="" /></Link>
 <ul className='navbar-menu'>
    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?'active':""}>home</Link>
   <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?'active':""}>menu</a>
   <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?'active':""}>mobile-app</a>
   <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?'active':""}>contact us</a>
 </ul>
 <div className='nav-right'>
    <img src={assets.search_icon} alt="" />
    <div className='nav-search-icon'>
      <Link to='/cart'>
        <img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div> </div>
        <button onClick={()=>setShowLogin(true)} >Signi in</button>
    
 </div>
    </div>
  )
}

export default Navbar




