import React from 'react';
import './testimonials.css';
import CLIENT1 from '../../assets/avatar1.jpg';
import CLIENT2 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: CLIENT1,
    name: 'Tina Snow',
    review: `Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Est repellat perferendis neque consequatur
            maiores non!`
  },
  {
    avatar: CLIENT2,
    name: 'Lenqi louw',
    review: `Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Est repellat perferendis neque consequatur
            maiores non!`
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials