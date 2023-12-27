import React from 'react'
import l1 from "../../public/hello.png";
import k4 from "../../public/hello.png";
import m2 from "../../public/hello.png";
import p1 from "../../public/hello.png";
import g1 from "../../public/hello.png";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import './Card.css';

const CategoryCard = () => {
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={4}
    navigation
    scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link href="/">
        <div className='border bg-white p-5 rounded-lg '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={l1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Laptops</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={k4} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Keyboards</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={m2} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Monitors</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={g1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Graphic Card</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={p1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Processor</h3>
        </div>
        </Link>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default CategoryCard