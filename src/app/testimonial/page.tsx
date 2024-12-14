'use client'
import Footer from "@/components/footer";
import Navigations from "@/components/navigations";
import Rodap from "@/components/rodap";
import Image from "next/image";
import Link from "next/link";
import React from "react";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Testemunhos(){
    return (
        <>
        <Navigations/>
        <Footer title="Testimonial"/>

        <div className="mt-44">
            <div className="flex flex-col items-center">
                <h1 className="text-[#81C408]">Nosso Testemunho</h1>
                <h2 className="text-slate-400 text-4xl font-extrabold">O que diz o nosso cliente!</h2>
            </div>
        <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="w-full max-w-[1560px] h-[510px] flex flex-col mt-10"
                >

                    {Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={index} className="flex h-44">
                           
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/img/redfone.jpg"
                                        alt="computador"
                                        className="w-full h-[250px] object-cover rounded-t-3xl"
                                    />
                               

                        </SwiperSlide>
                    ))}

                </Swiper>
        </div>

        <Rodap/>
        </>
    )
}