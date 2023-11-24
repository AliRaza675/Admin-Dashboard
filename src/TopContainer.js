import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiCool, BiChevronDown, BiBell } from "react-icons/bi";
import New from '../src/Images/New.jpeg'


function TopContainer() {
  return (
    <div className='top-container'>
        
        <div className='input-box'>
        
        <i>{<FaSearch/>}</i>
        <input type='text' placeholder='Search for doctors, patients, appointments..'/>

        </div>

        
        <div className='profile-container'>
       
          <i className='bell-icon'>{<BiBell/>}</i>

          <img className='image' src={New}/>

          <p className='profile-name'>Ali Raza</p>
          <i className='chevron'>{<BiChevronDown/>}</i>

          <div className='menu-container'>
            <ul>
              <li>Web design</li>
              <li>Web design</li>
              <li>Web design</li>
              <li>Web design</li>
              
            </ul>
          </div>

        </div>
    </div>
  )
}

export default TopContainer