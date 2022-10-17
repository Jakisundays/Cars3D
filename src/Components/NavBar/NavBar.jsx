import React from 'react'
import {GiCarKey} from 'react-icons/gi'
import { IoLogoGameControllerB } from 'react-icons/io'
import '/Users/jacobdominguez/Documents/codiyapa/cars3d/src/Components/NavBar/NavBar.css'
const NavBar = () => {
  return (
    <div className='NavBarContainer'>
            <h1 className='title'> SPE3D </h1>
            <div className='MidNav'> <IoLogoGameControllerB /> </div>
            <button className='NavContact'> Play Now </button>
    </div>
  )
}

export default NavBar
