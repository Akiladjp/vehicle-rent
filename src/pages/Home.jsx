import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { WhyUs } from '../components/WhyUs'
import { Testimonial } from '../components/Testimonial'
import { Newsletter } from '../components/Newsletter'
import { TrendingCars } from '../components/TrendingCars'

export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhyUs/>
        <TrendingCars/>
        <Newsletter/>
        <Testimonial/>
    </div>
  )
}
