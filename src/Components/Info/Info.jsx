import React from 'react'
import FerrariSpin from '../Ferrari/FerrariSpin'
import '/Users/jacobdominguez/Documents/codiyapa/cars3d/src/Components/Info/info.css'


const Info = () => {
  return (
    <div className='Info'>
      <h1 className='infoh1'> 3D and Modern dinamycs</h1>
      <p className='infop'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque similique fugit perspiciatis fugiat itaque totam voluptates saepe perferendis eaque.
      </p>
      
      <div className='ferrari'>
        <FerrariSpin />
      </div>
    </div>
  )
}

export default Info
