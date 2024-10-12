import React from 'react'
import styles from './Testimonials.module.scss'
import TestimonialCard from '../testimonialCard/TestimonialCard'



const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <h2>Hear from our awesome Customers!</h2>
        <div className={styles.testimonials__container__card}>
          <TestimonialCard />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
