import React from 'react'
import {
  FeaturedProducts,
  LandingHero,
  PersonalisedRecommendation,
  Testimonials,
} from '../../../components'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero data-testid="landing-hero" />
      <FeaturedProducts data-testid="featured-products" />
      <PersonalisedRecommendation data-testid="personalised-recommendation" />
      <Testimonials data-testid="testimonials-section" />
    </section>
  )
}

export default Landing
