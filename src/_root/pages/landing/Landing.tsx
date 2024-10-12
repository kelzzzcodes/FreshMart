import React from 'react'
import LandingHero from '../../../components/landingHero/LandingHero'
import Testimonials from '../../../components/testimonials/Testimonials'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero />
      <Testimonials />
    </section>
  )
}

export default Landing
