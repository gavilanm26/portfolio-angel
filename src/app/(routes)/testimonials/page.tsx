"use client"

import Image from 'next/image';
import {Autoplay, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '../../data';
import CircleImage from '../../components/circle-image';
import TransitionPage from '../../components/transition-page';
import {CoverParticles} from "@/app/components/cover-particles";
import ContactForm from "@/app/components/contact";

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh mt-[80px] sm:mt-0'>
                <ContactForm />
                {/* Separador entre Contacto y Testimonios */}
                <div className="flex justify-center items-center my-6">
                    <div className="w-2/3 border-t-2 border-secondary"></div>
                </div>

                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 mt-[-10px] sm:mt-0">
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
            <div className="absolute inset-0 -z-10">
                <CoverParticles />
            </div>
        </>
    );
}

export default TestimonialsPage;