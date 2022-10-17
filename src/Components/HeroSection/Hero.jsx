import React from 'react'
import CarShow from '../CarIntro/CarShow'
import '/Users/jacobdominguez/Documents/codiyapa/cars3d/src/Components/HeroSection/hero.css'

const Hero = () => {
  return (
   <div className='heroContainer'>
        <div className='heroWrapper'>
            <h1 className='heroh1'> The world is ours </h1>
            <h2 className='heroh2'> November 27, 2035 </h2>

            <button className='heroBtn'>
            <span className='span'> Play now </span>
            </button>
            {/* </div> */}
        </div>
            <div className='carShow' >
              <CarShow />
            </div>
   </div>
  )
}

export default Hero
