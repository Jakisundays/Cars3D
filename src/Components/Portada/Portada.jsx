import React from 'react'
import '/Users/jacobdominguez/Documents/codiyapa/cars3d/src/Components/Portada/portada.css'
import {SiPcgamingwiki} from 'react-icons/si'
import {FaPlaystation, FaXbox, FaSteam} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import bg from '/Users/jacobdominguez/Documents/codiyapa/cars3d/src/Components/Img/bg.gif'
const Portada = () => {
    const consolas = [<FaPlaystation />, <FaXbox />, <SiNintendoswitch />, <FaSteam />, <SiPcgamingwiki /> ]
  return (
    <div className='portada' 
    style={{
        backgroundImage: `url(${bg})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
      <div className='portadaIntro'>
        <h1 className='portadah1'> 3D MACHINES </h1>
        <h2 className='portadah2'> Free to play </h2>
        <div className='portadabtns'>
            <button className='PB'> Buy Now </button>
            <button className='PB'> Watch the trailer </button>
        </div>
      </div>
      <div className='consolas'>
        {consolas.map((i) => 
        <span> {i} </span>
        )}
      </div>
    </div>
  )
}

export default Portada
