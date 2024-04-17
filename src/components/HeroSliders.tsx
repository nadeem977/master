import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { SliderData } from '../assets/data';


const HeroSliders = () => {


  return (
    <>
     <div className='hero_slider'>
     <Swiper className="mySwiper"
     loop={true}
     autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    modules={[Autoplay,Navigation]}
     >
        {SliderData.map((item,i)=>(
        <SwiperSlide key={item.id} className='slider_container'>
            <img src={item.img} alt="icons" />
            </SwiperSlide>
        ))}
      </Swiper> 
     </div>
    </>
  )
}

export default HeroSliders
