import React, {useEffect} from 'react'
import './menu.css'

import Logo from '../Images/NewLogo.png'
import LogoNew from '../Images/deCancer new logo.png'


import { FaCopyright, FaBlackberry, FaDigg, FaBuffer, FaCalculator, FaBell, FaMessage, FaPersonRifle, FaUser } from "react-icons/fa6";
import { FaHome, Fa500Px, FaCog, FaBackspace } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";




function Menu() {


  useEffect(() =>{
    const mainmenuLI = document.getElementById("sidebar-menu").querySelectorAll('li');

    function changeActive(){
      mainmenuLI.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainmenuLI.forEach((n) => n.addEventListener("click", changeActive));

  },[]);

  useEffect(() =>{
    const mainmenuLI = document.getElementById("sidebar-menu1").querySelectorAll('li');

    function changeActive(){
      mainmenuLI.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainmenuLI.forEach((n) => n.addEventListener("click", changeActive));

  },[]);
  return (
    
  <menu className='div1'>
        <div className='logo-place'>
          {/* <i><Fa500Px /></i> */}
        

          <img src={Logo}
          alt='Logo' />

        </div>




      <div className='lists'>
      <ul className='sidebar-menu' id="sidebar-menu">
        <li>
          <a href="#">
            <FaHome /> Dashboard
          </a>  

         
        

        </li>
        <li>
          <a href="#">
            <FaUser /> Profile
          </a>
        </li>
        <li>
          <a href="#">
            <FaMessage /> Messages
          </a>
        </li>

        <li>
          <a href="#">
            <FaCog /> Settings
          </a>
        </li>
        
      </ul>

      <ul className='sidebar-menu' id="sidebar-menu1">
        <li>
          <a href="#">
            <BiLogOut /> Logout
          </a>
        </li>
        
      </ul>

        {/* <ul id="mainmenu">
          <Icon icon={<FaHome />}/>
          <Icon icon={<FaBlackberry />}/>
          <Icon icon={<FaBuffer />}/>
          <Icon icon={<FaCopyright />}/>
          <Icon icon={<FaCalculator />}/>


        </ul>

        <ul id='secondmenu'>
          
          <Icon icon={<FaDigg />}/>
          <Icon icon={<FaBell />}/>
          <Icon icon={<FaBell />}/>
          <Icon icon={<FaBell />}/>
          <Icon icon={<FaBell />}/>

         
        </ul> */}

      </div>
        
    </menu>
  );


  
}
// const Icon = ({icon}) => (
//   <li className='list-item'>
//     <a href='#'>{icon}</a>
    
//   </li>
  
// );

export default Menu