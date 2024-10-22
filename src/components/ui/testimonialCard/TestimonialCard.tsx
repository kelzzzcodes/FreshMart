import React from 'react'
import styles from './TestimonialCard.module.scss'

interface TestimonialCardProps {
  id: string
  imageUrl: string
  name: string
  description: string
}

const TestimonialCard = ({
  id,
  imageUrl,
  name,
  description,
}: TestimonialCardProps) => {
  return (
    <div data-testid="testimonial-card" className={styles.testimonialCard}>
      <div className={styles.testimonialCard__top}>
        <img src={imageUrl} alt={id} />
        <ul>
          <li>{name}</li>
        </ul>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default TestimonialCard
