import AvatarServices from "../../components/avatar-services";
import CircleImage from "../../components/circle-image";
import SliderServices from "../../components/slider-services";
import TransitionPage from "../../components/transition-page";
import {CoverParticles} from "@/app/components/cover-particles";
import Image from "next/image";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 px-4 md:px-8 mx-auto md:grid-cols-2">

                <div className="max-w-[450px] mt-[150px] sm:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis <span className="font-bold text-secondary"> servicios.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300 mt-[30px] sm:mt-0">
                        Ofrezco servicios profesionales en informática, redes y telecomunicaciones, con especialización en la instalación de sistemas de videovigilancia, cableado estructurado, citofonía y control de acceso. Con más de 10 años de experiencia, brindo soluciones personalizadas y de alta calidad, diseñadas para satisfacer las necesidades específicas de mis clientes en entornos residenciales y empresariales.
                    </p>
                    <p className="mb-3 text-xl text-gray-300 mt-[20px] sm:mt-0">
                        Además, realizo mantenimiento de equipos tecnológicos y servicios de impresión 3D personalizados, ofreciendo diseños precisos y funcionales para proyectos diversos. Mi objetivo es garantizar eficiencia, durabilidad y un rendimiento óptimo en cada solución que implemento.
                    </p>


                    <div className="text-center md:text-left mt-[40px] sm:mt-0 flex justify-center">
                        <a
                            href="https://wa.me/573214550322?text=Hola, estoy interesado en tus servicios. ¿Podemos hablar?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-white text-sm sm:text-base font-medium bg-secondary hover:bg-secondary/80 rounded-lg shadow-md transition-all"
                        >
                            <Image
                                src="/assets/images/icons/whatsapp.png"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                            />
                            <span>Contacta conmigo</span>
                        </a>
                    </div>

                </div>

                <div className="mt-[1px] sm:mt-0">
                    <SliderServices />
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <CoverParticles />
            </div>
        </>
    );
};

export default ServicesPage;
