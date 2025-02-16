import React from 'react'
import './FeaturesSection.css'
import Image from 'next/image'
import ReachCard from './components/Cards/ReachCard/ReachCard'
import MarketingCard from './components/Cards/MarketingCard/MarketingCard'
import InsightsCard from './components/Cards/InsightsCard/InsightsCard'
import ThunderCard from './components/Cards/ThunderCard/ThunderCard'
import SectionHeadding from '@/components/SectionHeadding/SectionHeadding'
export default function FeaturesSection() {
  return (
    <div id='FeaturesSection'>
      {/* <button id='FeaturesButton'>
        Features
      </button>
      <div id='FeaturesText'>
        <span>Feature packed to make </span>
        <span>Digital marketing easier and affordable.</span>
      </div>
      <span className='text-[#E2E8F8]'>
        Experience Intelligent Features to optimize your marketing efforts.
      </span> */}
      <SectionHeadding chipText='Features' title='Feature packed to make' subtitle='Digital marketing easier and affordable.' description='Experience Intelligent Features to optimize your marketing efforts.' />  
      <section id='features-cards'>
        <ReachCard />
        <div className='flex flex-col justify-center items-center w-full h-full gap-5' >
          <MarketingCard />

          <InsightsCard />
        </div>
        <ThunderCard />
      </section>
    </div>
  )
}

