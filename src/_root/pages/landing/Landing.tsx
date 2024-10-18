import React from 'react'
import {
  FeaturedProducts,
  LandingHero,
  PersonalisedRecommendation,
} from '../../../components'
import Testimonials from '../../../components/testimonials/Testimonials'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero data-testid="landing-hero" />
      <FeaturedProducts data-testid="featured-products" />
      <PersonalisedRecommendation data-testid="personalised-recommendation" />
      <Testimonials />
    </section>
  )
}

export default Landing
