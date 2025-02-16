import React from 'react'
import './SectionHeadding.css'
export default function SectionHeadding({ chipText, title, subtitle, description }) {
    return (
        <div className='section-heading'>
            <button className='chip'>
                {chipText}
            </button>
            <div className='body'>
                <div className='highlighted'>
                    <span className='title'>{title} </span>
                    <span className='subtitle'>{subtitle}</span>
                </div>
                <span className='description'>
                  {description}
                </span>
            </div>
        </div>
    )
}
