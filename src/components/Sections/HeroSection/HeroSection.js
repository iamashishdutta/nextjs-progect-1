import React from 'react'
import './HeroSection.css'
import MagicCard from './components/MagicCard/MagicCard'
import TrialButton from './components/TrialButton/TrialButton'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section id='hero-section'>
      <MagicCard />
      <Image src="/centerLogo.png" width={468} height={95} alt="logo" />
      <span className="flex flex-col justify-center items-center gap-6">
          <p className="text-center w-8/12">
            Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them - all in real-time.
          </p>
          <TrialButton />
      </span>
    </section>
  )
}
