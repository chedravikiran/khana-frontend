import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../assets2/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id='explore-menu' className='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Step into a curated experience where every detail is designed to inspire — tap here to explore our full menu of features, options, and hidden gems waiting just for you</p>
        <div className='explore-menu-list'>
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu