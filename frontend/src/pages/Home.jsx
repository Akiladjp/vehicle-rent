import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { WhyUs } from '../components/WhyUs'
import { Testomonial } from '../components/Testomonial'
import { Newsletter } from '../components/Newsletter'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhyUs/>
        <Newsletter/>
        <Testomonial/>
    </div>
  )
}
