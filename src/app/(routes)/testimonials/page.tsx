"use client"

import Image from 'next/image';
import {Autoplay, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '../../data';
import CircleImage from '../../components/circle-image';
import TransitionPage from '../../components/transition-page';
import {CoverParticles} from "@/app/components/cover-particles";

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh'>
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunos comentarios
                    <span className="block font-bold text-secondary"> de nuestros clientes</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px] mt-[20px] sm:mt-0"
                        >
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <CoverParticles />
        </>
    );
}

export default TestimonialsPage;