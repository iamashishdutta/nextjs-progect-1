import React from 'react'
import './TestinomialsSection.css'
import Image from 'next/image'
import SectionHeadding from '@/components/SectionHeadding/SectionHeadding'
export default function TestinomialsSection() {
  return (
    <div id='TestinomialsSection'>
      <SectionHeadding chipText='Testimonials' title='What our customers say' subtitle='Discover how we’ve driven growth and innovation.' description='Discover how we’ve driven growth and innovation.' /> 

      <section id='Testinomials-cards'>

        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>
        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>
        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>
        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>
        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>
        <div className='Testinomials-card'>
          <span className='Testinomials-card-text'>
            “We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”
          </span>
          <span className='Testinomials-card-name'>
            -Brand Director at a Tech Startup
          </span>
        </div>

      </section>
    </div>
  )
}

