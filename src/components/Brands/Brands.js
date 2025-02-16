import React from 'react'
import './Brands.css'
import Image from 'next/image'
export default function Brands() {
  return (
    <div id='Brands'>
        <div className='slider-wrapper'>
            <div className='slider'>
                <Image src="/brands.png" width={1000} height={100} alt="logo" />
         </div>
            <div className='slider'>
                <Image src="/brands.png" width={1000} height={100} alt="logo" />
         </div>
        </div>
    </div>
  )
}
