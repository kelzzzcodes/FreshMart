import React from 'react'
import LandingHero from '../../../components/landingHero/LandingHero'
import Card from '../../../components/card/Card'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero />
      <Card />
    </section>
  )
}

export default Landing
