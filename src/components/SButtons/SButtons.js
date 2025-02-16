import React from 'react'
import './SButtons.css'
import { FaXTwitter } from "react-icons/fa6"; export default function SButtons() {
    return (
        <div id='SButtons-container'>
            <span className='SButton-container'>
                <button className='SButton'>
                    <span className='w-full h-full flex icon-container'>
                        <FaXTwitter className='w-full h-fit p-5 icon' />
                    </span>
                </button>
                <span className='SButton-text'>Twitter</span>
            </span>
              <span className='SButton-container'>
                <button className='SButton'>
                    <span className='w-full h-full flex icon-container'>
                        <FaXTwitter className='w-full h-fit p-5 icon' />
                    </span>
                </button>
                <span className='SButton-text'>Twitter</span>
            </span>
            <span className='SButton-container'>
                <button className='SButton'>
                    <span className='w-full h-full flex icon-container'>
                        <FaXTwitter className='w-full h-fit p-5 icon' />
                    </span>
                </button>
                <span className='SButton-text'>Twitter</span>
            </span>
        </div>
    )
}
