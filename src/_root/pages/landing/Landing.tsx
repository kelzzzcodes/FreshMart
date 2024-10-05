import { FeaturedProducts, LandingHero } from '../../../components'

const Landing = () => {
  return (
    <section data-testid="landing-hero">
      <LandingHero data-testid="landing-hero" />
      <FeaturedProducts  />
    </section>
  )
}

export default Landing
