import React from 'react'
import LandingHero from '../../../components/landingHero/LandingHero'
import PersonalisedRecommendation from '../../../components/personalisedRecommendation/PersonalisedRecommendation'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero />
      <PersonalisedRecommendation/>
    </section>
  )
}

export default Landing
