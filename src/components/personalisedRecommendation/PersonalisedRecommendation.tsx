import React from 'react'
import styles from './PersonalisedRecommendation.module.scss'

const PersonalisedRecommendation = () => {
  return (
    <section className={styles.personalisedRecommendation}>
      <div className={styles.personalisedRecommendation__container}>
        <h2>Your Smart Farm Shopping Companion</h2>

        <p>
          Get personalized farm-to-table recommendations, track your deliveries,
          and discover recipes, all with the help of our AI assistant
        </p>
      </div>
    </section>
  )
}

export default PersonalisedRecommendation
