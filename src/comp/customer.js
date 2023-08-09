import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './customer.css';

import 'boxicons/css/boxicons.min.css';

import image1 from '../images/unsplash_OhKElOkQ3RE.png';
import image2 from '../images/unsplash_rDEOVtE7vOs.png';
import image3 from '../images/unsplash_C8Ta0gwPbQg.png';

const Customer = () => {
  return (
    <>
      {/* Our happy customer */}
      <div className="container-happy-customer">
        <div className="happy-customer">
          <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>happy customer</h2>
          <p>We Are Proud Of Our Design Team</p>
        </div>
      </div>
      {/* END happy customer*/}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={image1} alt="Image" /> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="stars">
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <img src={image2} alt="Image" /> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="stars">
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <img src={image3} alt="Image" /> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="stars">
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          <i className='bx bxs-star' style={{ color: '#f6ee0d' }}></i>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Customer;


        


        


        
