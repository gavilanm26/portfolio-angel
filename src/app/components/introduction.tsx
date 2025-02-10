"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex flex-col items-center justify-center h-full p-4 sm:py-6 gap-3 md:py-10 md:grid md:grid-cols-2 lg:gap-6">

                <Image
                    src="/assets/images/home/home-4.png"
                    priority
                    width="800"
                    height="800"
                    className="mt-[30px] sm:mt-0 w-fullsm:max-w-[150px] sm:w-full h-auto object-contain md:max-w-[400px] lg:max-w-[600px]"
                    alt="Avatar"
                />


                <div className="sm:mt-0 flex flex-col items-center justify-center sm:px-2 max-w-xs md:items-start md:max-w-md lg:max-w-lg">

                    <h1 className="mt-[-15px] mb-2 text-base text-center leading-tight sm:text-sm md:text-left md:text-2xl lg:text-4xl md:mb-6">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedo instalarlo",
                                1000,
                                "puedo optimizarlo",
                                1000,
                                "puedo configurarlo",
                                1000,
                                "puedo mantenerlo",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="text-base text-center sm:mb-6 md:mb-8 lg:mb-10 md:text-left md:text-base lg:text-lg">
                        Especialista en informática y redes, ofrezco soluciones integrales en videovigilancia, cableado estructurado,
                        sistemas de citofonía, control de acceso y mantenimiento tecnológico.
                    </p>

                    <div className="flex items-center justify-center gap-2 sm:gap-3 md:justify-start md:gap-5 lg:gap-10 mt-4">
                        <a
                            href="/services"
                            className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base border-2 rounded-xl hover:shadow-xl"
                        >
                            <Image
                                src="/assets/images/icons/soporte-tecnico.png"
                                alt="Soporte técnico"
                                width={24}
                                height={24}
                            />
                            Mis servicios
                        </a>

                        <a
                            href="https://wa.me/573214550322?text=Hola, estoy interesado en tus servicios. ¿Podemos hablar?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base text-secondary border-2 border-secondary rounded-xl hover:shadow-xl"
                        >
                            <Image
                                src="/assets/images/icons/whatsapp.png"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                            />
                            Contáctame
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
