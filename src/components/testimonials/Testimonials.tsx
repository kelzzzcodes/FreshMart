import React from 'react'
import styles from './Testimonials.module.scss'
import TestimonialCard from '../ui/testimonialCard/TestimonialCard'
import { testimonialCardItems } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Navigation } from 'swiper/modules'

import 'swiper/swiper-bundle.css'

const Testimonials = () => {
  return (
    <section data-testid="testimonials-section" className={styles.testimonials}>
      <div
        data-testid="testimonials-container"
        className={styles.testimonials__container}
      >
        <img src="./assets/testimonialStroke.svg" alt="testimonialStroke" />
        <h2>Hear from our awesome Customers!</h2>
        <div className={styles.testimonials__container__card}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {testimonialCardItems.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
